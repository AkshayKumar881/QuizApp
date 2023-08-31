import React from 'react';
import { useDispatch } from 'react-redux';
import { setUserEmail, fetchQuestions } from '../store/actions';

const StartPage = () => {
  const dispatch = useDispatch();

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    const userEmail = e.target.email.value;
    dispatch(setUserEmail(userEmail));
    await dispatch(fetchQuestions()); // Fetch questions after setting email
  };

  return (
    <div>
      <h1>Welcome to the Quiz!</h1>
      <form onSubmit={handleEmailSubmit}>
        <input type="email" name="email" placeholder="Enter your email" />
        <button type="submit">Start Quiz</button>
      </form>
    </div>
  );
};

export default StartPage;
