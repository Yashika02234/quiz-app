import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import RoleSelection from "./pages/RoleSelection";
import StudentRegister from "./pages/StudentRegister";
import TeacherRegister from "./pages/TeacherRegister";
import Login from "./pages/Login";
import StudentDashboard from "./pages/StudentDashboard";
import TeacherDashboard from "./pages/TeacherDashboard";
import CreateQuiz from "./pages/CreateQuiz"; // Add this
import TakeQuiz from "./pages/TakeQuiz"; // Add this
import CreateCourse from "./pages/CreateCourse";
import EnrollCourse from "./pages/EnrollCourse";
import Progress from "./pages/Progress";
import Notifications from "./pages/Notifications";
import QuizAnalytics from "./pages/QuizAnalytics";
import CourseCategories from "./pages/CourseCategories";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<RoleSelection />} />
        <Route path="/register/student" element={<StudentRegister />} />
        <Route path="/register/teacher" element={<TeacherRegister />} />
        <Route path="/login" element={<Login />} />
        <Route path="/student-dashboard" element={<StudentDashboard />} />
        <Route path="/teacher-dashboard" element={<TeacherDashboard />} />
        <Route path="/create-quiz" element={<CreateQuiz />} /> {/* Add this */}
        <Route path="/quiz/:id" element={<TakeQuiz />} /> {/* Add this */}
        <Route path="/create-course" element={<CreateCourse />} />
        <Route path="/create-quiz" element={<CreateQuiz />} />
        <Route path="/enroll-course" element={<EnrollCourse />} />
        <Route path="/progress" element={<Progress />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/quiz-analytics" element={<QuizAnalytics />} />
        <Route path="/course-categories" element={<CourseCategories />} />
      </Routes>
    </Router>
  );
};

export default App;