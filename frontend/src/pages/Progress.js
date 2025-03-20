import React, { useState, useEffect } from "react";

const Progress = () => {
  const [progress, setProgress] = useState([]);

  useEffect(() => {
    const savedProgress = JSON.parse(localStorage.getItem("progress")) || [];
    setProgress(savedProgress);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-8">Your Progress</h1>
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-2xl">
        {progress.map((item, index) => (
          <div key={index} className="mb-6 border p-4 rounded-lg">
            <h2 className="text-xl font-bold mb-2">Course: {item.courseId}</h2>
            <p>Quiz: {item.quizId}</p>
            <p>Score: {item.score}/{item.total}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Progress;