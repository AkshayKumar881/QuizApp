import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { answerQuestion } from '../store/actions';

const QuizPage = ({ onQuestionClick }) => {
  const currentQuestion = useSelector((state) => state.currentQuestion);
  const questions = useSelector((state) => state.questions);
  const userEmail = useSelector((state) => state.userEmail);
  const userAnswers = useSelector((state) =>
    state.questions.map((_, index) => state.userAnswers[index])
  );
  const dispatch = useDispatch();

  const [selectedAnswer, setSelectedAnswer] = useState('');

  const handleAnswerSubmit = (e) => {
    e.preventDefault();
    if (selectedAnswer) {
      dispatch(answerQuestion(currentQuestion, selectedAnswer));
      setSelectedAnswer('');
    }
  };

  const handleAnswerChange = (e) => {
    setSelectedAnswer(e.target.value);
  };

  if (currentQuestion >= questions.length) {
    // Quiz has ended, show result page
    return <ResultPage questions={questions} userAnswers={userAnswers} />;
  }

  return (
    <div>
      <h2>Question {currentQuestion + 1}</h2>
      <p>{questions[currentQuestion].text}</p>
      <form onSubmit={handleAnswerSubmit}>
        {questions[currentQuestion].options.map((option, index) => (
          <div key={index}>
            <input
              type="radio"
              name="answer"
              value={option}
              checked={selectedAnswer === option}
              onChange={handleAnswerChange}
            />
            <label>{option}</label>
          </div>
        ))}
        <button type="submit">Next</button>
      </form>
      <div>
        <h3>Question Navigation</h3>
        <ul>
          {questions.map((_, index) => (
            <li
              key={index}
              className={
                index === currentQuestion
                  ? 'current-question'
                  : index < currentQuestion
                  ? 'visited'
                  : ''
              }
              onClick={() => onQuestionClick(index)}
            >
              {index + 1}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default QuizPage;
