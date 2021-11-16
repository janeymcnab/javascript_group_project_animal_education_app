import Quiz from "../components/Quiz";
import NavBar from '../components/NavBar';

const QuizContainer = ({loaded, score, questions, currentQuestion, handleAnswerOptionClick, answers, showScore, handleQuizReset}) => {

    return (
        <>
            <NavBar/>
            <h1>QUIZ</h1>
            <Quiz
                loaded={loaded}
                score={score}
                questions={questions}
                currentQuestion={currentQuestion}
                handleAnswerOptionClick={handleAnswerOptionClick}
                showScore={showScore}
                answers={answers}
                handleQuizReset={handleQuizReset}
            />
        </>
    )
}

export default QuizContainer;