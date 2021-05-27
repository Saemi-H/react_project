import React from 'react';

const VideoItem = ({video}) => {
    const {title, thumbnails} = video.snippet
    return (
        <>
            
          <img src={`${thumbnails.default.url}`} alt="tumbnail" /> 
          <p>{title}</p>
        </>
    );
};

export default VideoItem;