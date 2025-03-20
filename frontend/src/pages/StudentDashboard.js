import React from "react";
import { Link } from "react-router-dom";

const StudentDashboard = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-8">Student Dashboard</h1>
      <Link to="/quiz/1">
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Take Quiz
        </button>
      </Link>
      <Link to="/enroll-course">
  <button className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 mt-4">
    Enroll in Courses
  </button>
</Link>
    </div>
  );
};

export default StudentDashboard;