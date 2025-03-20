import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const EnrollCourse = () => {
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const savedCourses = JSON.parse(localStorage.getItem("courses")) || [];
    setCourses(savedCourses);
  }, []);

  const handleEnroll = (courseId) => {
    const updatedCourses = courses.map((course) => {
      if (course.id === courseId) {
        return { ...course, enrolledStudents: [...course.enrolledStudents, "student1"] }; // Simulate student ID
      }
      return course;
    });
    localStorage.setItem("courses", JSON.stringify(updatedCourses));
    alert("Enrolled successfully!");
    navigate("/student-dashboard");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-8">Enroll in Courses</h1>
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-2xl">
        {courses.map((course) => (
          <div key={course.id} className="mb-6 border p-4 rounded-lg">
            <h2 className="text-xl font-bold mb-2">{course.title}</h2>
            <p className="mb-4">{course.description}</p>
            <button
              onClick={() => handleEnroll(course.id)}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Enroll
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EnrollCourse;