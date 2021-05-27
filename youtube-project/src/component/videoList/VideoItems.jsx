import React from "react";
import VideoItem from "./VideoItem";

const VideoItems = ({ videolist }) => {
    return (
        <div>
            <ul>
                {videolist.map((video) => (
                    <li key={video.id.videoId}>
                        <VideoItem video={video} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default VideoItems;
