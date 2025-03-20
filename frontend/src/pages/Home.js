import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Welcome to the Quiz App</h1>
        <p className="mb-4">Take quizzes and test your knowledge!</p>
        <Link to="/quiz/1">
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Start Quiz
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;