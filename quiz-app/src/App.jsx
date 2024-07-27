import Quizz from "./components/Quizz/Quizz";
import { useEffect, useState } from "react";

function App() {
    const [questions, setQuestion] = useState([]);

    useEffect(() => {
        getQuestionAPI();
    }, []);

    const getQuestionAPI = async () => {
        try {
            const res = await fetch(
                "https://644982a3e7eb3378ca4ba471.mockapi.io/questions"
            );
            const questionRes = await res.json();
            setQuestion(questionRes);
        } catch (error) {
            console.log(error);
        }
    };

    return questions.length && <Quizz questions={questions} />;
}

export default App;
