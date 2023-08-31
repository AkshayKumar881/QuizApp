import * as actionTypes from './types';
import fetch from 'node-fetch';

// ... (other actions)

export const fetchQuestions = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        'https://opentdb.com/api.php?amount=15&type=multiple'
      );
      const data = await response.json();
      const questions = data.results.map((question) => {
        const options = question.incorrect_answers.concat(
          question.correct_answer
        );
        return {
          text: question.question,
          options: options,
          correctAnswer: question.correct_answer,
        };
      });
      dispatch(setQuestions(questions));
    } catch (error) {
      console.error('Error fetching questions:', error);
    }
  };
};
