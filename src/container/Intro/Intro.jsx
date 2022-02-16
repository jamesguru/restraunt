import React from 'react';

import './Intro.css';

import {BsFillPlayFill, BsPauseFill} from 'react-icons/bs';


import {meal} from '../../constants';

const Intro = () => {


  const videoRef = React.useRef();

  const [playVideo, setPlayVideo] = React.useState(false);

const handleVideo = () =>{


  setPlayVideo((prevPlayVideo) => !prevPlayVideo);


  if(playVideo){

    videoRef.current.pause();
  }else{

    videoRef.current.play();
  }
}

  return (
    <div className="app__video">
  
      <video ref={videoRef} type="video/mp4" loop controls={false} muted src={meal}/>


      <div className="app__video-overlay flex__center">

        <div className="app__video-overlay_circle flex__center" onClick={handleVideo}>


          {

            playVideo ? <BsPauseFill color="#fff" fontSize={30}/> : <BsFillPlayFill  color="#fff" fontSize={30}/>
          }


        </div>


      </div>
     
    </div>
  );
}

export default Intro;
