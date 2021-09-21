import React from "react";
import vvideo from "../assets/images/video.mp4";
import vvvideo from "../assets/images/video1.mp4";
import background from '../assets/17973908.jpg';
const Video = () => {
  return (
    <div class="bg-video">
      <img src={background} alt='Background' className='bg-video__content' />
    </div>
  );
};
export default Video;
