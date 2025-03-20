import React, { useState, useEffect } from "react";

const QuizAnalytics = () => {
  const [quizzes, setQuizzes] = useState([]);

  useEffect(() => {
    const savedQuizzes = JSON.parse(localStorage.getItem("quizzes")) || [];
    setQuizzes(savedQuizzes);
  }, []);

  const calculateAnalytics = (quizId) => {
    const results = JSON.parse(localStorage.getItem("progress")) || [];
    const quizResults = results.filter((result) => result.quizId === quizId);
    const totalStudents = quizResults.length;
    const totalScore = quizResults.reduce((sum, result) => sum + result.score, 0);
    const averageScore = totalStudents > 0 ? (totalScore / totalStudents).toFixed(2) : 0;
    const passRate =
      totalStudents > 0
        ? (quizResults.filter((result) => result.score >= result.total / 2).length / totalStudents) * 100
        : 0;

    return {
      totalStudents,
      averageScore,
      passRate: passRate.toFixed(2),
    };
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-8">Quiz Analytics</h1>
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-2xl">
        {quizzes.map((quiz) => {
          const { totalStudents, averageScore, passRate } = calculateAnalytics(quiz.id);
          return (
            <div key={quiz.id} className="mb-6 border p-4 rounded-lg">
              <h2 className="text-xl font-bold mb-2">{quiz.title}</h2>
              <p className="mb-4">{quiz.description}</p>
              <p>Total Students: {totalStudents}</p>
              <p>Average Score: {averageScore}</p>
              <p>Pass Rate: {passRate}%</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default QuizAnalytics;