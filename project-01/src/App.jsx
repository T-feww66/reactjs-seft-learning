import "./App.css";
import { Header, Hero } from "./components";
function App() {
    return (
        <div>
            <Header></Header>
            <main>
                <div className="container">
                    <Hero></Hero>
                </div>
            </main>
        </div>
    );
}

export default App;
