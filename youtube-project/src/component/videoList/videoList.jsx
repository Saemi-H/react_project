import React, { useEffect, useState } from 'react';
import VideoItems from './VideoItems';


const VideoList = ({videolist}) => {
   
    return (
        <div>
           <VideoItems videolist={videolist}/>   
        </div>
    );
};

export default VideoList;