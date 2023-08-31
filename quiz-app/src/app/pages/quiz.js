import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import QuizPage from '../components/QuizPage';

const Quiz = () => {
  const currentQuestion = useSelector((state) => state.currentQuestion);
  const userAnswers = useSelector((state) => state.userAnswers);
  const router = useRouter();

  const handleQuestionNavigation = (questionIndex) => {
    if (questionIndex <= currentQuestion) {
      router.push(`/quiz?q=${questionIndex}`);
    }
  };

  if (currentQuestion >= userAnswers.length) {
    // Quiz has ended, show result page
    return <ResultPage />;
  }

  return (
    <div>
      <h2>Question {currentQuestion + 1}</h2>
      <QuizPage
        onQuestionClick={handleQuestionNavigation}
        userAnswers={userAnswers}
      />
    </div>
  );
};

export default Quiz;
