import "./Video.scss";
import SideBar from "../../components/SideBar/SideBar";
import PlayVideo from "../../components/PlayVideo/PlayVideo";
import Recommended from "../../components/Recommended/Recommended";
import { useParams } from "react-router-dom";
function Video({ isOpen, handleClickMenu }) {
    const { categoryId, videoId } = useParams();
    return (
        <div>
            <SideBar isOpen={isOpen} handleClickMenu={handleClickMenu} />
            <div className="video">
                <div className="video__inner">
                    <PlayVideo />
                    <Recommended categoryId={categoryId} />
                </div>
            </div>
        </div>
    );
}

export default Video;
