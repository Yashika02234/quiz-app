import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">
          Quiz App
        </Link>
        <div>
          <Link to="/login" className="mr-4">
            Login
          </Link>
          <Link to="/register" className="mr-4">
            Register
          </Link>
          <Link to="/create-quiz" className="mr-4">
            Create Quiz
          </Link>
          <Link to="/quiz/1">
            Take Quiz
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;