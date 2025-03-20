import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const CourseCategories = () => {
  const [courses, setCourses] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    const savedCourses = JSON.parse(localStorage.getItem("courses")) || [];
    setCourses(savedCourses);
  }, []);

  const filteredCourses = selectedCategory
    ? courses.filter((course) => course.category === selectedCategory)
    : courses;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-8">Course Categories</h1>
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2">Filter by Category</label>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="w-full p-2 border rounded"
        >
          <option value="">All Categories</option>
          {["Programming", "Mathematics", "Science", "History"].map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-2xl">
        {filteredCourses.map((course) => (
          <div key={course.id} className="mb-6 border p-4 rounded-lg">
            <h2 className="text-xl font-bold mb-2">{course.title}</h2>
            <p className="mb-4">{course.description}</p>
            <p className="text-sm text-gray-500">Category: {course.category}</p>
            <Link to={`/course/${course.id}`}>
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                View Course
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseCategories;