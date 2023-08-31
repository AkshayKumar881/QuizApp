import React from 'react';

const ResultPage = ({ questions, userAnswers }) => {
  return (
    <div>
      <h1>Quiz Results</h1>
      <table>
        <thead>
          <tr>
            <th>Question</th>
            <th>Your Answer</th>
            <th>Correct Answer</th>
          </tr>
        </thead>
        <tbody>
          {questions.map((question, index) => (
            <tr key={index}>
              <td>{question.text}</td>
              <td>{userAnswers[index]}</td>
              <td>{question.correctAnswer}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ResultPage;
