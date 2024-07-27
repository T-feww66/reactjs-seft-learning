import { useState } from "react";
import { resultInitialState } from "../../constants";

import "./Quizz.scss";
import AnswerTimer from "../AnswerTimer/AnswerTimer";
function Quizz({ questions }) {
    // Cau hoi hien tai
    const [currentQuestion, setCurrentQuestion] = useState(0);

    //Vi tri cau tra loi hien tai
    const [answerIdx, setAnswerIdx] = useState(null);

    //cau tra loi dung hay sai
    const [isAnswer, setIsAnswer] = useState(false);
    const [inputAnswer, setInputAnswer] = useState("");

    //tinh diem ket qua
    const [result, setResult] = useState(resultInitialState);

    // show ket qua sau cung
    const [showResult, setShowResult] = useState(false);
    const [showTimer, setShowTimer] = useState(true);

    const { question, choices, correctAnswer, type } = questions[currentQuestion];

    const onAnswerClick = (answer, index) => {
        setAnswerIdx(index);
        if (answer === correctAnswer) {
            setIsAnswer(true);
        } else {
            setIsAnswer(false);
        }
    };

    const onClickNext = (answer) => {
        setAnswerIdx(null);
        setShowTimer(false);
        setResult((prev) =>
            answer
                ? {
                      ...prev,
                      score: prev.score + 5,
                      correctAnswer: prev.correctAnswer + 1,
                  }
                : {
                      ...prev,
                      errorAnswer: prev.errorAnswer + 1,
                  }
        );

        if (currentQuestion !== questions.length - 1) {
            setCurrentQuestion((prev) => prev + 1);
        } else {
            setCurrentQuestion(0);
            setShowResult(true);
        }

        setTimeout(() => {
            setShowTimer(true);
        }, 1000);
    };

    const handleAgain = () => {
        setShowResult(false);
        setResult(resultInitialState);
    };

    const handleTimerUp = () => {
        setIsAnswer(false);
        onClickNext(isAnswer);
    };

    const handleChange = (e) => {
        setInputAnswer(e.target.value);

        if (e.target.value === correctAnswer) {
            setIsAnswer(true);
        } else {
            setIsAnswer(false);
        }
    };

    const answerUi = () => {
        if (type === "FIB") {
            return <input value={inputAnswer} onChange={handleChange} />;
        }
        return (
            <ul className="quizz-list-answer">
                {choices.map((answer, index) => {
                    return (
                        <li
                            onClick={() => onAnswerClick(answer, index)}
                            key={answer}
                            className={
                                answerIdx === index ? "selected-answer" : null
                            }
                        >
                            {answer}
                        </li>
                    );
                })}
            </ul>
        );
    };

    return (
        <div className="quizz-container">
            {!showResult ? (
                <>
                    {showTimer && (
                        <AnswerTimer duration={10} onTimeUp={handleTimerUp} />
                    )}
                    <span className="active-question-no">
                        {currentQuestion + 1}
                    </span>
                    <span className="total-question">/{questions.length}</span>
                    <h2 className="quizz-question">{question}</h2>

                    {/*  */}
                    {answerUi()}

                    {/* footer */}
                    <div className="footer">
                        <button
                            onClick={() => onClickNext(isAnswer)}
                            disabled={answerIdx === null && !inputAnswer}
                        >
                            {currentQuestion === questions.length - 1
                                ? "Finish"
                                : "Next"}
                        </button>
                    </div>
                </>
            ) : (
                <div className="question-result">
                    <h3>Result</h3>
                    <p>Total Question: {questions.length}</p>
                    <p>Total Score: {result.score}</p>
                    <p>Total Question Correct: {result.correctAnswer}</p>
                    <p>Total Question Error: {result.errorAnswer}</p>
                    <button onClick={handleAgain}>Try Again</button>
                </div>
            )}
        </div>
    );
}

export default Quizz;
