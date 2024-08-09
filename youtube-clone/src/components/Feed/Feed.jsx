import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import moment from "moment";
import "./Feed.scss";

import { convertView, DATA_KEY } from "../../data";

function Feed({ category }) {
    const [data, setData] = useState([]);

    const fetchApiYoutube = async () => {
        const urlData = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=${DATA_KEY}`;
        await fetch(urlData)
            .then((res) => res.json())
            .then((dataYoutube) => setData(dataYoutube.items));
    };

    useEffect(() => {
        fetchApiYoutube();
    }, [category]);

    return (
        <div className="feed">
            <div className="feed__inner">
                {data.map((item, index) => {
                    return (
                        <Link
                            key={item.id}
                            to={`/video/${item.snippet.categoryId}/${item.id}`}
                            className="feed__card"
                        >
                            <img
                                src={item.snippet.thumbnails.medium.url}
                                alt=""
                            />
                            <div className="feed__info">
                                <h3 className="feed__title">
                                    {item.snippet.title}
                                </h3>
                                <h4 className="feed__name">
                                    {" "}
                                    {item.snippet.channelTitle}
                                </h4>
                                <p className="flex feed__desc">
                                    <span>
                                        {convertView(item.statistics.viewCount)}{" "}
                                        views &bull;{" "}
                                        {moment(
                                            item.snippet.publishedAt
                                        ).fromNow()}
                                    </span>
                                </p>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}

export default Feed;
