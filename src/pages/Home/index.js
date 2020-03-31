import React from "react";
import HomeLogo from "../../components/homelogo";
import PromoHome from "../../components/PromoHome";
import Slider from "../../components/Slider";
import img from "./mask.png";
import "./styles.scss";
import Aside from "../../components/asideHome";

const Home = () => {
  return (
    <div>
      <div className="Home">
        <div style={{ backgroundImage: `url("${img}")` }} className="info-home">
          <div className="sec-1">
            <HomeLogo />
            <Slider slider="1" />
            <PromoHome />
          </div>
        </div>
        <div className="aside">
          <Aside />
        </div>
      </div>
    </div>
  );
};

export default Home;
