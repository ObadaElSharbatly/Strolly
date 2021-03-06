import React from "react";
import AppInfo from "./AppInfo";
import "../../styles/Home.css";
//import familyPhoto from "../../images/black-family-walking-down-street.jpg";
import VideoHeader from "./VideoHeader";

import StartButton from "./StartButton";

const Home = () => {
  return (
    <div>
      <VideoHeader />
      <div className="first-h1">
        <h1>How It Works</h1>
      </div>
      <AppInfo />
      <StartButton />
    </div>
  );
};

export default Home;
