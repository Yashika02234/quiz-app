import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const TakeQuiz = () => {
  const { id } = useParams(); // Remove this if not used
  const navigate = useNavigate();
  const [quiz, setQuiz] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [score, setScore] = useState(0);

  useEffect(() => {
    const savedQuiz = JSON.parse(localStorage.getItem("quiz"));
    if (savedQuiz) {
      setQuiz(savedQuiz);
    }
  }, []);

  if (!quiz) return <div>Loading...</div>;

  const handleNextQuestion = () => {
    if (selectedAnswer === quiz.questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
    if (currentQuestion < quiz.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer("");
    } else {
      alert(`Quiz completed! Your score is ${score + 1}/${quiz.questions.length}`);
      navigate("/student-dashboard");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-8">{quiz.title}</h1>
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-2xl">
        <h2 className="text-xl font-bold mb-4">
          Question {currentQuestion + 1}: {quiz.questions[currentQuestion].questionText}
        </h2>
        {quiz.questions[currentQuestion].options.map((option, index) => (
          <div key={index} className="mb-2">
            <label className="flex items-center">
              <input
                type="radio"
                name="answer"
                value={option}
                checked={selectedAnswer === option}
                onChange={() => setSelectedAnswer(option)}
                className="mr-2"
              />
              {option}
            </label>
          </div>
        ))}
        <button
          onClick={handleNextQuestion}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          {currentQuestion < quiz.questions.length - 1 ? "Next Question" : "Submit Quiz"}
        </button>
      </div>
    </div>
  );
};

export default TakeQuiz;