import React from "react";
import QuizCard from "../components/QuizCard";

const Home = () => {
  const quizzes = [
    { id: 1, title: "Math Quiz", description: "Test your math skills!" },
    { id: 2, title: "Science Quiz", description: "Test your science knowledge!" },
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Available Quizzes</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {quizzes.map((quiz) => (
          <QuizCard key={quiz.id} quiz={quiz} />
        ))}
      </div>
    </div>
  );
};

export default Home;