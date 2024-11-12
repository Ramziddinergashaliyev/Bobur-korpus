import React from "react";
import "./video.scss";
import video from "../../assets/video/1.mp4";

const Video = () => {
  return (
    <div className="video-container">
      <video className="background-video" src={video} autoPlay muted loop />
      <div className="overlay-content container">
        <h1>BOBURNING BOLALIK VA YOSHLIK DAVRI</h1>
        <p>
          Zahiriddin Muhammad Bobur 1483-yil 14-fevral kuni Farg‘ona
          viloyatining poytaxti Andijonda tug‘ildi. Uning sertashvish hayoti va
          jo‘shqin faoliyati siyosiy, ijtimoiy-iqtisodiy va madaniy jihatdan
          inqirozga uchrab, tanazzulga tushayotgan Temuriylar saltanatining
          so‘nggi davriga to‘g‘ri keldi.
        </p>
      </div>
    </div>
  );
};

export default Video;
