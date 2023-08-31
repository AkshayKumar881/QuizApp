import * as actionTypes from './types';

const initialState = {
  userEmail: '',
  currentQuestion: 0,
  userScore: 0,
  questions: [],
  userAnswers: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_USER_EMAIL:
      return { ...state, userEmail: action.payload };
    case actionTypes.SET_QUESTIONS:
      return { ...state, questions: action.payload };
    case actionTypes.ANSWER_QUESTION:
      const userAnswers = [...state.userAnswers];
      userAnswers[action.payload.questionIndex] = action.payload.answer;
      return { ...state, userAnswers };
    // ... (other cases)
    default:
      return state;
  }
};

export default reducer;
