import { useState } from "react";
import "./AnswerTimer.scss";
import { useRef } from "react";
import { useEffect } from "react";
function AnswerTimer({ duration, onTimeUp }) {
    const [count, setCount] = useState(0);
    const [processLoad, setProcessLoad] = useState(0);
    const intervalRef = useRef();

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setCount((prev) => prev + 1);
        }, 1000);

        return () => clearInterval(intervalRef.current);
    }, []);

    useEffect(() => {
        setProcessLoad(100 * (count / duration));

        if (count === duration) {
            clearInterval(intervalRef.current);

            setTimeout(() => {
                onTimeUp();
            }, 1000);
        }
    }, [count]);

    return (
        <div className="answer-timer">
            <div
                style={{
                    width: `${processLoad}%`,
                    backgroundColor: `${
                        processLoad < 40
                            ? "lightgreen"
                            : processLoad < 80
                            ? "orange"
                            : "red"
                    }`,
                }}
                className="process"
            ></div>
        </div>
    );
}

export default AnswerTimer;
