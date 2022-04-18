import React, { Component } from "react";
import ChallangeSection from "../ChallangeSection/ChallangeSection";
import Footer from "../Footer/Footer";
import Landing from "../Landing/Landing";
import Navbar from "../Navbar/Navbar";
import "./App.css";

const TotalTime = 60;
const ServiceUrl = "http://metaphorpsum.com/paragraphs/1/9";
const DefaultState = {
  selectParagraph: " ",
  timerstarted: false,
  timeremaining: TotalTime,
  words: 0,
  characters: 0,
  wpm: 0,
  testInfo: [], 

}

class App extends Component {
  state = DefaultState

  //as soon as component is mount we are going to call api
  componentDidMount() {
    fetch(ServiceUrl)
      .then((Response) => Response.text())
      .then((data) => {
        this.setState({ selectParagraph: data });
        const selectedParagraphArray = data.split(" ");
         //split(" ") - split the paragraph into words
         const testInfo = selectedParagraphArray.map((selectedLetter) => {
           return {
             testLetter: selectedLetter,
             status: "notAttempted",
           };
         });
         this.setState({ testInfo,selectedParagraph: data });
      });
    
   
        
  }



  startTimer = () => {
    this.setState({ timerstarted: true });

    const timer = setInterval(() => {
      if (this.state.timeremaining > 0) {
        // change the wpm
        //  const wpm

        const timespent = TotalTime - this.state.timeremaining;
        const wpm =
          timespent > 0 ? (this.state.words / timespent) * TotalTime : 0;
        this.setState({
          timeremaining: this.state.timeremaining - 1,
          wpm: parseInt(wpm),
        });
      } else {
        clearInterval(timer);
      }
    }, 1000);
  };

  startAgain = () => alert("I am starting again");

  handleUserInput = (inputvalue) => {
    if (!this.state.timerstarted) {
      this.startTimer();
    }

    /*  
      1. Handle the underflow Case - all the characters should be not attempted - early exit

      2.Handle the overflow case - early exit

      3.Handle the backspace
         -Mark the [index + 1] element as not-attempted(irrespective of whether the index is less than 0)
         -But, don't forget to check for overflow case here
         (index+1 -> out of bound, when index === length - 1)

      4.Update the status in the test info
        - find out last character in input value and index
        - check if the character at same index in testinfo 
      
     */

    //inputvalue - "Hey Nikhil"
    const characters = inputvalue.length; //10

    const words = inputvalue.split(" ").length; //2

    const index = characters - 1; //9
    
    //underflow case when index is 0; i.e. No character Type
    if (index < 0) {
      this.setState({
        testInfo: [
          {
            testLetter: this.state.testnfo[0].testLetter, //M
            status: "notAttempted" 
          },
          ...this.state.testInfo.slice(1),
        ],
        characters,
        words,
      });
      return
    }

    //overflow occur when user completed his paragraph
    if (index >= this.state.selectParagraph.length) {
      this.setState({ characters, words });
      return;
    }

    //Make a copy of testInfo
    const testInfo = this.state.testnfo;
    if (!(index === this.state.selectParagraph.length - 1)) {
      testInfo[index + 1].status = "notAttempted";

      //check for the correct typed letter
      const isCorrect = inputvalue[index].testLetter === testInfo[index].testLetter;

      //update the testinfo
      testInfo[index].status = isCorrect ? "Correct" : "Incorrect";

      //update the state
      this.setState({
        testInfo,
        words,
        characters
      })
    }
  };

  render() {
    return (
      <div className="app">
        {/* navbar */}
        <Navbar />
        {/* landing page */}
        <Landing />
        {/* challenge section */}
        <ChallangeSection
          selectParagraph={this.state.selectParagraph}
          timerstarted={this.state.timerstarted}
          timeremaining={this.state.timeremaining}
          words={this.state.words}
          characters={this.state.characters}
          wpm={this.state.wpm}
          testInfo={this.state.testInfo}
          onInputChange={this.handleUserInput}
          startAgain = {this.startAgain}
        />

        {/* footer */}
        <Footer />
      </div>
    );
  }
}

export default App;
