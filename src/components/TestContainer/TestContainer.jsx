import React from "react";
import TryAgain from "../TryAgain/TryAgain";
import TypingChallangeContainer from "../TypingChallangeContainer/TypingChallangeContainer";
import "./TestContainer.css";

const TestContainer = ({
  selectParagraph,
  timerstarted,
  timeremaining,
  words,
  characters,
  wpm,
  testInfo,
  onInputChange,
  TryAgain,
}) => {
  return (
    <div className="test-container">
      {timeremaining > 0 ? (
        <div data-aos="fade-up" className="typing-challange-cont">
          <TypingChallangeContainer
            timeremaining={timeremaining}
            selectParagraph={selectParagraph}
            timerstarted={timerstarted}
            words={words}
            characters={characters}
            wpm={wpm}
            testInfo={testInfo}
            onInputChange = {onInputChange}
          />
        </div>
      ) : (
        <div className="try-again-cont">
            <TryAgain words={words} characters={characters} wpm={wpm} startAgain={ startAgain}/>
        </div>
      )}
    </div>
  );
};

export default TestContainer;
