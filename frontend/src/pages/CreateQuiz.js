import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateQuiz = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [questions, setQuestions] = useState([]);
  const [courseId, setCourseId] = useState("");
  const navigate = useNavigate();

  const courses = JSON.parse(localStorage.getItem("courses")) || [];

  const addQuestion = () => {
    setQuestions([...questions, { questionText: "", options: ["", ""], correctAnswer: "" }]);
  };

  const handleQuestionChange = (index, field, value) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index][field] = value;
    setQuestions(updatedQuestions);
  };

  const handleOptionChange = (questionIndex, optionIndex, value) => {
    const updatedQuestions = [...questions];
    updatedQuestions[questionIndex].options[optionIndex] = value;
    setQuestions(updatedQuestions);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const quiz = {
      id: `quiz${Date.now()}`,
      title,
      description,
      questions,
      courseId,
    };
    // Save quiz to localStorage
    const quizzes = JSON.parse(localStorage.getItem("quizzes")) || [];
    quizzes.push(quiz);
    localStorage.setItem("quizzes", JSON.stringify(quizzes));
    alert("Quiz created successfully!");
    navigate("/teacher-dashboard");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-8">Create Quiz</h1>
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md w-full max-w-2xl">
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">Quiz Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">Quiz Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">Select Course</label>
          <select
            value={courseId}
            onChange={(e) => setCourseId(e.target.value)}
            className="w-full p-2 border rounded"
            required
          >
            <option value="">Select a course</option>
            {courses.map((course) => (
              <option key={course.id} value={course.id}>
                {course.title}
              </option>
            ))}
          </select>
        </div>
        {questions.map((question, questionIndex) => (
          <div key={questionIndex} className="mb-6 border p-4 rounded-lg">
            <h2 className="text-xl font-bold mb-4">Question {questionIndex + 1}</h2>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2">Question Text</label>
              <input
                type="text"
                value={question.questionText}
                onChange={(e) => handleQuestionChange(questionIndex, "questionText", e.target.value)}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            {question.options.map((option, optionIndex) => (
              <div key={optionIndex} className="mb-4">
                <label className="block text-sm font-bold mb-2">Option {optionIndex + 1}</label>
                <input
                  type="text"
                  value={option}
                  onChange={(e) => handleOptionChange(questionIndex, optionIndex, e.target.value)}
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
            ))}
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2">Correct Answer</label>
              <input
                type="text"
                value={question.correctAnswer}
                onChange={(e) => handleQuestionChange(questionIndex, "correctAnswer", e.target.value)}
                className="w-full p-2 border rounded"
                required
              />
            </div>
          </div>
        ))}
        <button
          type="button"
          onClick={addQuestion}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 mb-4"
        >
          Add Question
        </button>
        <button type="submit" className="w-full bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
          Create Quiz
        </button>
      </form>
    </div>
  );
};

export default CreateQuiz;