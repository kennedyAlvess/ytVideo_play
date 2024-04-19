import React, { useState } from 'react'; 
import VideoPlay from './Components/VideoPlay/MainVideo'
import VideosList from './Components/VideoList/RecomendedList'

function App() {
  const [videoSrc, setVideoSrc] = useState('/videos/maselao.mp4');

  function changeVideo(src) {
    setVideoSrc(src);
  }

  return (
    <div className='container'>
      <div className='mainVideo'>
        <VideoPlay videoSrc={videoSrc}/>
      </div>
      <div className='recomendedVideo'>
        <VideosList changeVideo={changeVideo} videoSrc={videoSrc}/>
      </div>
    </div>
  )
}

export default App
