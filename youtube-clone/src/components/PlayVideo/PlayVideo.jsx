import "./PlayVideo.scss";

import like from "../../assets/like.png";
import dislike from "../../assets/dislike.png";
import share from "../../assets/share.png";
import save from "../../assets/save.png";
import { useEffect, useState } from "react";
import { convertView, DATA_KEY } from "../../data";
import moment from "moment";
import { useParams } from "react-router-dom";

function PlayVideo() {
    const [videoData, setVideoData] = useState(null);
    const [channelData, setChannelData] = useState(null);
    const [commentData, setCommentData] = useState([]);

    // lay dia chi video id
    const { videoId } = useParams();
    console.log(videoId)

    const fetchchannelData = async () => {
        const urlVideoId = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${DATA_KEY}`;
        await fetch(urlVideoId)
            .then((res) => res.json())
            .then((data) => setVideoData(data.items[0]));
        const urlComments = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=${videoId}&key=${DATA_KEY}`;
        await fetch(urlComments)
            .then((res) => res.json())
            .then((data) => setCommentData(data.items));
    };

    const fetchChannelDetail = async () => {
        const urlChanel = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${videoData.snippet.channelId}&key=${DATA_KEY}`;
        await fetch(urlChanel)
            .then((res) => res.json())
            .then((data) => setChannelData(data.items[0]));
    };

    useEffect(() => {
        fetchchannelData();
    }, [videoId]);

    useEffect(() => {
        if (videoData !== null) {
            fetchChannelDetail();
        }
    }, [videoData]);

    return (
        <div className="video__play">
            {/* <video src={video} autoPlay controls muted></video> */}
            <iframe
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>

            <div className="video__info">
                <h1 className="video__title">
                    {videoData ? videoData.snippet.title : "Title Here"}
                </h1>
                <div className="flex video__info-bottom">
                    <p className="flex video__times">
                        {videoData
                            ? convertView(videoData.statistics.viewCount)
                            : "1M"}{" "}
                        Views &bull;{" "}
                        {videoData
                            ? moment(videoData.snippet.publishedAt).fromNow()
                            : "1M"}{" "}
                    </p>

                    <div className="video__action flex">
                        <div className="video__action-group">
                            <img src={like} alt="" className="video__icon" />
                            <span className="video__action-info">
                                {videoData
                                    ? convertView(
                                          videoData.statistics.likeCount
                                      )
                                    : "1M"}
                            </span>
                        </div>
                        <div className="video__action-group">
                            <img src={dislike} alt="" className="video__icon" />
                            <span className="video__action-info">5</span>
                        </div>
                        <div className="video__action-group">
                            <img src={share} alt="" className="video__icon" />
                            <span className="video__action-info">Share</span>
                        </div>
                        <div className="video__action-group">
                            <img src={save} alt="" className="video__icon" />
                            <span className="video__action-info">Save</span>
                        </div>
                    </div>
                </div>
            </div>

            <span className="separate"></span>

            <div className="video__bottom">
                <div className="sub flex">
                    <img
                        src={
                            channelData
                                ? channelData.snippet.thumbnails.default.url
                                : ""
                        }
                        alt=""
                    />
                    <div className="sub__info">
                        <h3 className="sub__name">
                            {videoData
                                ? videoData.snippet.channelTitle
                                : "Chanel Title Here"}
                        </h3>
                        <span className="sub__times">
                            {channelData
                                ? convertView(
                                      channelData.statistics.subscriberCount
                                  )
                                : ""}{" "}
                            Subscribers
                        </span>
                    </div>

                    <button className="sub__btn">Subscribers</button>
                </div>

                <div className="video__publisher">
                    <p className="sub__desc">
                        {videoData
                            ? videoData.snippet.description.slice(250)
                            : "Description here"}
                    </p>

                    <div className="separate"></div>

                    <div className="comment">
                        <h3 className="comment__title">
                            {videoData
                                ? convertView(
                                      videoData.statistics.commentCount
                                  ) + " "
                                : "1M"}
                            Comments
                        </h3>

                        {/* comment here */}
                        <div className="comment__contents">
                            {commentData.map((comment, index) => {
                                return (
                                    <div
                                        key={comment.id}
                                        className="comment__item"
                                    >
                                        <img
                                            src={
                                                comment.snippet.topLevelComment
                                                    .snippet
                                                    .authorProfileImageUrl
                                            }
                                            alt=""
                                            className="comment__avatar"
                                        />
                                        <div className="comment__info">
                                            <h4 className="flex comment__name">
                                                {
                                                    comment.snippet
                                                        .topLevelComment.snippet
                                                        .authorDisplayName
                                                }
                                                <span>
                                                    {moment(
                                                        comment.snippet
                                                            .topLevelComment
                                                            .snippet.publishedAt
                                                    ).fromNow()}
                                                </span>
                                            </h4>

                                            <p className="comment__desc">
                                                {
                                                    comment.snippet
                                                        .topLevelComment.snippet
                                                        .textDisplay
                                                }
                                            </p>

                                            <div className="flex video__action">
                                                <div className="video__action-group">
                                                    <img
                                                        src={like}
                                                        alt=""
                                                        className="video__icon"
                                                    />
                                                    <span className="video__action-info">
                                                        {convertView(
                                                            comment.snippet
                                                                .topLevelComment
                                                                .snippet
                                                                .likeCount
                                                        )}
                                                    </span>
                                                </div>
                                                <div className="video__action-group">
                                                    <img
                                                        src={dislike}
                                                        alt=""
                                                        className="video__icon"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PlayVideo;
