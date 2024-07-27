import Job from "./components/Job/Job";
import NavBar from "./components/NavBar/NavBar";
import Search from "./components/Search/Search";

function App() {
    return (
        <div className="w-[85%] m-auto bg-white">
            <NavBar />
            <Search />
            <Job />
        </div>
    );
}

export default App;
