import { useState } from "react";
import Dices from "./Dices";
import RoleDice from "./RoleDice";
import TotalScore from "./TotalScore";
import styled from "styled-components";

// style
const GameTop = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
function GamePlay() {
    const [selected, setSelected] = useState();
    const [currentDice, setCurrentDice] = useState(1);
    const [score, setScore] = useState(0);
    const [error, setError] = useState("");

    const ramdomDice = (min, max) => {
        const ramdom = Math.floor(Math.random() * (max - min) + min);
        return ramdom;
    };

    const roleDice = () => {
        if (!selected) {
            setError("Vui Long chon truoc khi quay");
            return;
        }

        const ramdom = ramdomDice(1, 7);
        setCurrentDice(ramdom);

        if (selected === ramdom) {
            setScore((prev) => prev + currentDice);
        } else {
            setScore((prev) => prev - currentDice);
        }
    };

    return (
        <div className="container">
            <GameTop>
                <TotalScore score={score} />
                <Dices
                    selected={selected}
                    setSelected={setSelected}
                    error={error}
                    setError={setError}
                />
            </GameTop>
            <RoleDice currentDice={currentDice} roleDice={roleDice} />
        </div>
    );
}

export default GamePlay;
