import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Video from "./Pages/Video/Video";
import { useState } from "react";
import FeedCategory from "./Pages/FeedCategory/FeedCategory";

function App() {
    const [isOpen, setIsOpen] = useState(false);

    const handleClickMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <Navbar isOpen={isOpen} handleClickMenu={handleClickMenu} />
            <Routes>
                <Route
                    path="/"
                    element={
                        <Home
                            isOpen={isOpen}
                            handleClickMenu={handleClickMenu}
                        />
                    }
                />

                <Route
                    path="/feed/:categoryId"
                    element={
                        <FeedCategory
                            isOpen={isOpen}
                            handleClickMenu={handleClickMenu}
                        />
                    }
                />
                <Route
                    path="/video/:categoryId/:videoId"
                    element={
                        <Video
                            isOpen={isOpen}
                            handleClickMenu={handleClickMenu}
                        />
                    }
                />
            </Routes>

            {isOpen ? (
                <div className="opacity" onClick={handleClickMenu}></div>
            ) : (
                ""
            )}
        </div>
    );
}

export default App;
