import React from "react";
import { Link } from "react-router-dom";

const TeacherDashboard = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-8">Teacher Dashboard</h1>
      <Link to="/create-quiz">
        <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
          Create Quiz
        </button>
      </Link>
      <Link to="/create-course">
  <button className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 mt-4">
    Create Course
  </button>
</Link>
<Link to="/quiz-analytics">
  <button className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 mt-4">
    View Quiz Analytics
  </button>
</Link>
    </div>
  );
};

export default TeacherDashboard;