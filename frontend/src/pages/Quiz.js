import React, { useState, useEffect } from "react";
import QuestionCard from "../components/QuestionCard";

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes

  // Fetch questions and start the timer
  useEffect(() => {
    // Fetch questions from the backend (mock data for now)
    const mockQuestions = [
      {
        id: 1,
        type: "MCQ",
        questionText: "What is 2 + 2?",
        options: ["3", "4", "5", "6"],
        correctAnswer: "4",
        marks: 1,
      },
      {
        id: 2,
        type: "true/false",
        questionText: "The Earth is flat.",
        options: ["True", "False"],
        correctAnswer: "False",
        marks: 1,
      },
    ];
    setQuestions(mockQuestions);

    // Timer
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Tab locking feature
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        alert("Switching tabs is not allowed!");
        // Optionally, submit the quiz or penalize the user.
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  // Webcam monitoring feature
  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        const video = document.createElement("video");
        video.srcObject = stream;
        video.play();
        document.body.appendChild(video);
      })
      .catch((err) => {
        console.error("Error accessing webcam:", err);
      });
  }, []);

  const handleAnswer = (answer) => {
    if (answer === questions[currentQuestion].correctAnswer) {
      setScore((prev) => prev + questions[currentQuestion].marks);
    }
    setCurrentQuestion((prev) => prev + 1);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Quiz</h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        {currentQuestion < questions.length ? (
          <QuestionCard
            question={questions[currentQuestion]}
            handleAnswer={handleAnswer}
          />
        ) : (
          <div>
            <h2 className="text-xl font-bold">Quiz Completed!</h2>
            <p>Your Score: {score}</p>
          </div>
        )}
        <p className="mt-4">
          Time Left: {Math.floor(timeLeft / 60)}:{timeLeft % 60 < 10 ? `0${timeLeft % 60}` : timeLeft % 60}
        </p>
      </div>
    </div>
  );
};

export default Quiz;