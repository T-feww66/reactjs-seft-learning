import { useState } from "react";
import "./App.css";
import StartGame from "./component/StartGame";
import GamePlay from "./component/GamePlay";

function App() {
    const [isGameStated, setIsGameStated] = useState(false);

    const handleToggle = () => {
        setIsGameStated((prev) => !prev);
    };

    return isGameStated ? <GamePlay /> : <StartGame toggle={handleToggle} />;
}

export default App;
