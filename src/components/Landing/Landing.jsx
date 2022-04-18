
import React from "react";
import hero from "./../../assets/hero.png";
import './Landing.css'
import Typewriter from "typewriter-effect";

const Landing = () => {
    return (
      <div className="landing-container">
        <div className="landing-left" data-aos="fade-right">
          <h1 className="landing-header">Can You Type?</h1>
          <div className="typewriter-container">
            <Typewriter
              options={{
                strings: ["Fast?", "Accurate?", "Quick?"],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
        </div>

        <div className="landing-right">
          <img
            className="flash-image"
            data-aos="fade-left"
            src={hero}
            alt="flash"
          />
        </div>
      </div>
    );
}

export default Landing;


