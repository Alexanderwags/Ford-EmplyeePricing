import React from 'react'
import ReactPlayer from "react-player"


 const VideoPlayer = () => {
    
    return (
      <div>
        <ReactPlayer
          url="https://s3.amazonaws.com/com.shift.videos.test.upgrade-sale-2019-1/23105da0-58fd-4f71-ac07-830404d91677.mp4"
          className="react-player"
          playing
          light="../../../public/0.883386f5.jpg"
          controls
          width="600px"
          height="300px"
        />
      </div>
    )
}

export default VideoPlayer
