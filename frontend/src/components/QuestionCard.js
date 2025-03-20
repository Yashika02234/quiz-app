
const QuestionCard = ({ question, handleAnswer }) => {
    return (
      <div>
        <h2 className="text-xl font-bold mb-4">{question.questionText}</h2>
        <div className="space-y-2">
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(option)}
              className="bg-blue-600 text-white px-4 py-2 rounded-md w-full text-left hover:bg-blue-700"
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    );
  };
  
  export default QuestionCard;