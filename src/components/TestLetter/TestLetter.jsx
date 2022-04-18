import React from "react";
import "./TextLetter.css"

const TestLetter = ({ individualLetterInfo }) => {
    // const status = individualLetterInfo.status
    const { status } = individualLetterInfo;
    // let statusClass;
    
    // if (status === "correct") {
    //     statusClass = "test-letter-correct";
    // }
    // else if (status === "incorrect") {
    //     statusClass = "test-letter-incorrect";
    // }
    // else {
    //     statusClass = "test-letter-not-attempted";
    // }

    const statusClass = {
      correct: "test-letter-correct",
      incorrect: "test-letter-incorrect",
      notAttempted: "test-letter-not-attempted",
    }[status];
    return (
      <span className={`test-letter ${statusClass}`}>
        {individualLetterInfo.testletter}
      </span>
    );
};

export default TestLetter;