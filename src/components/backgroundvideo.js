import React from "react";
import vvideo from "../assets/images/video.mp4";
import vvvideo from "../assets/images/video.webm";

const Video = () => {
  return (
    <div class="bg-video">
      <video class="bg-video__content" playsinline autoplay muted loop>
        <source src={vvideo}  type="video/mp4" />
        Your browser is not supported!
      </video>
    </div>
  );
};
export default Video;
