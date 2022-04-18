import React from "react";
import TestContainer from "../TestContainer/TestContainer";

import "./ChallangeSection.css";

const ChallangeSection = ({
  selectParagraph,
  timerstarted,
  timeremaining,
  words,
  characters,
  wpm,
  testInfo,
  onInputChange,
  startAgain,
  
}) => {
  return (
    <div className="challenge-section-container">
      <h1 data-aos="fade-down" className="challenge-section-header">
        Take a Spped Test Now!
      </h1>
      <TestContainer
        selectParagraph={selectParagraph}
        timeremaining={timeremaining}
        words={words}
        characters={characters}
        wpm={wpm}
        testInfo={testInfo}
        onInputChange={onInputChange}
        startAgain={startAgain}
        
      />
    </div>
  );
};

export default ChallangeSection;
