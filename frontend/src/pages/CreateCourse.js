import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateCourse = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState(""); // Add category state
  const navigate = useNavigate();

  // Example categories
  const categories = ["Programming", "Mathematics", "Science", "History"];

  const handleSubmit = (e) => {
    e.preventDefault();
    const course = {
      id: `course${Date.now()}`,
      title,
      description,
      category, // Add category to the course object
      teacherId: "teacher1", // Simulate teacher ID
      quizzes: [],
      enrolledStudents: [],
    };
    // Save course to localStorage
    const courses = JSON.parse(localStorage.getItem("courses")) || [];
    courses.push(course);
    localStorage.setItem("courses", JSON.stringify(courses));
    alert("Course created successfully!");
    navigate("/teacher-dashboard");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-8">Create Course</h1>
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md w-full max-w-2xl">
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">Course Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">Course Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">Category</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full p-2 border rounded"
            required
          >
            <option value="">Select a category</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>
        <button type="submit" className="w-full bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
          Create Course
        </button>
      </form>
    </div>
  );
};

export default CreateCourse;