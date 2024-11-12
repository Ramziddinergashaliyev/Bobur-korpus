import React from "react";
import Hero from "../../components/hero/Hero";
import Video from "../../components/vidio/Video";
import Global from "../../components/global/Global";
import { useNavigate, useParams } from "react-router-dom";

const Home = () => {
  let { p } = useParams();
  console.log(p);
  return (
    <div>
      <Hero />
      <Global />
      <Video />
    </div>
  );
};

export default Home;
