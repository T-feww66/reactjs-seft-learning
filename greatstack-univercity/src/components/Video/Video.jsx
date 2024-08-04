import "./Video.scss";

import video_student from "../../assets/7971025-uhd_3840_2160_24fps.mp4";

function Video({ playVideo, setPlayVideo }) {
    return (
        <div className={`video ${playVideo ? " hide" : ""}`}>
            <span className="close" onClick={() => setPlayVideo(true)}>
                X
            </span>
            <video src={video_student} controls autoPlay muted></video>
        </div>
    );
}

export default Video;
