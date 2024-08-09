import Feed from "../../components/Feed/Feed";
import SideBar from "../../components/SideBar/SideBar";
import { useParams } from "react-router-dom";
function FeedCategory({ isOpen, handleClickMenu }) {
    const { categoryId } = useParams();

    console.log(categoryId);
    return (
        <div>
            <SideBar isOpen={isOpen} handleClickMenu={handleClickMenu} />
            <div className="container">
                <Feed category={categoryId} />
            </div>
        </div>
    );
}

export default FeedCategory;
