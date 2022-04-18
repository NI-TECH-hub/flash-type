import React from "react";
import TestLetter from "../TestLetter/TestLetter";
import "./TypingChallange.css";

const TypingChallange = ({
  timeremaining,
  timerstarted,
  testInfo,
  onInputChange,
}) => {
  // console.log('inside typing challange - ',testInfo)
  // testInfo.map(hc => {
  //   return (
  //     console.log(hc.testletter)
  //   )

  // })
  return (
    <div className="typing-challange-container">
      <div className="timer-container">
        <p className="timer">
          00:{timeremaining >= 10 ? timeremaining : `0${timeremaining}`}
        </p>
        <p className="timer-info">
          {!timerstarted && "Start typing to start the test"}
        </p>
      </div>` `

      <div className="textarea-container">
        <div className="textarea-left">
          <div className="textarea test-paragraph">
            {testInfo.map((individualLetterInfo, index) => (
              <TestLetter
                key={index}
                individualLetterInfo={individualLetterInfo}
              />
            ))}
            
          </div>
        </div>
        <div className="textarea-right">
          <textarea
            onChange={(e) => onInputChange(e.target.value)}
            className="textarea"
            placeholder="start typing here"
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default TypingChallange;
