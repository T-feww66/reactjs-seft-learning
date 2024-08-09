import Feed from "../../components/Feed/Feed";
import SideBar from "../../components/SideBar/SideBar";
function Home({ isOpen, handleClickMenu }) {
    return (
        <div>
            <SideBar isOpen={isOpen} handleClickMenu={handleClickMenu} />
            <div className="container">
                <Feed category="0" />
            </div>
        </div>
    );
}

export default Home;
