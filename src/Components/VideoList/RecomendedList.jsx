import React, { useState } from 'react';
import './RecomendedList.css';

function VideosList(props) {

  const [videos, setVideos] = useState([
    { src: '/videos/caixamisteriosa.mp4' },
    { src: '/videos/fagosmaprismatica.mp4' },
    { src: '/videos/pescando.mp4' }
  ]);

  function handleClick(videoSrc) {
    props.changeVideo(videoSrc);
    setVideos(videos.map(video => video.src === videoSrc ? { src: props.videoSrc } : video));
  }

  return (
    <div className='video-list'>
      {videos.map((video, index) => (
        <div key={index} onClick={() => handleClick(video.src)} className="video-container">
          <video className="video-player" src={video.src} />
          <button className="play-button">Play</button>
        </div>
      ))}
    </div>
  );
}

export default VideosList;
