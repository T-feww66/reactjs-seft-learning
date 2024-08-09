import { Link } from "react-router-dom";

import "./Recommended.scss";

import { useEffect, useState } from "react";
import { convertView, DATA_KEY } from "../../data";

function Recommended({ categoryId }) {
    const [videoData, setVideoData] = useState([]);

    const fetchVideoData = async () => {
        const urlVideo = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&videoCategoryId=${categoryId}&key=${DATA_KEY}`;
        await fetch(urlVideo)
            .then((res) => res.json())
            .then((data) => setVideoData(data.items));
    };

    useEffect(() => {
        fetchVideoData();
    }, [categoryId]);

    return (
        <div className="recom">
            <div className="recom__inner">
                {videoData.map((item, index) => {
                    return (
                        <Link
                            key={item.id}
                            to={`/video/${item.snippet.categoryId}/${item.id}`}
                            className="recom__item "
                        >
                            <img
                                src={item.snippet.thumbnails.medium.url}
                                alt=""
                                className="recom__video"
                            />
                            <div className="recom__info">
                                <h3 className="recom__title">
                                    {item.snippet.title}
                                </h3>
                                <h4 className="recom__name">
                                    {" "}
                                    {item.snippet.channelTitle}
                                </h4>
                                <span className="recom__view">
                                    {convertView(item.statistics.viewCount)}{" "}
                                    Views
                                </span>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}

export default Recommended;
