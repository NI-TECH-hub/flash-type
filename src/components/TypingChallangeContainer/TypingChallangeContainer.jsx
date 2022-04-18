import React from "react";
import ChallangeDetailsCard from "../ChallangeDetailsCard/ChallangeDetailsCard";
import TypingChallange from "../TypingChallange/TypingChallange";
import './TypingChallangeContainer.css'

const TypingChallangeContainer = ({
  selectParagraph,
  timerstarted,
  timeremaining,
  words,
  characters,
  wpm,
  testInfo,
  onInputChange,
}) => {
  // console.log('Inside Typing Challange - ',testInfo)
  return (
    <div className="typing-challange-container">
      <div className="details-container">
        {/* words */}
        <ChallangeDetailsCard CardName="words" cardValue={words} />

        {/* characters */}
        <ChallangeDetailsCard CardName="characters" cardValue={characters} />

        {/* wpm */}
        <ChallangeDetailsCard CardName="Speed" cardValue={wpm} />
      </div>

      <div className="typewriter-container">
        <TypingChallange
          onInputChange={onInputChange}
          timerstarted={timerstarted}
          timeremaining={timeremaining}
          selectedParagraph={selectParagraph}
          testInfo={testInfo}
        />
      </div>
    </div>
  );
};

export default TypingChallangeContainer;