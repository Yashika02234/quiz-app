import { Link } from "react-router-dom";

const QuizCard = ({ quiz }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-2">{quiz.title}</h2>
      <p className="text-gray-700 mb-4">{quiz.description}</p>
      <Link
        to={`/quiz/${quiz.id}`}
        className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
      >
        Start Quiz
      </Link>
    </div>
  );
};

export default QuizCard;