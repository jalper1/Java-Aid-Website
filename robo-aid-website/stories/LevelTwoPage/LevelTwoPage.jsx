import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./levelTwoPage.css";
import { Header } from "../Header/Header";
import { Button } from "../Button/Button";
import levelTwoGif from "./levelTwo.gif"; // Import the GIF at the top of your file
import levelTwoLose from "./levelTwoLose.gif"; // Import the lose GIF when you lose
import levelTwoStart from "./levelTwoStart.jpeg"; // Import the start image as a default
import { Image } from "react-bootstrap";
import Select from "../Select One/Select";

export const LevelTwoPage = ({ ...props }) => {
  const [selectOne, setSelectOne] = useState("");
  const [selectTwo, setSelectTwo] = useState("");
  const [selectThree, setSelectThree] = useState("");
  const [selectFour, setSelectFour] = useState("");
  const [selectFive, setSelectFive] = useState("");
  const [selectSix, setSelectSix] = useState("");
  const [selectSeven, setSelectSeven] = useState("");
  const [selectEight, setSelectEight] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [codeLines, setCodeLines] = useState([]); // State to hold the selected options as an array
  const [showGif, setShowGif] = useState(false);
  const [gifKey, setGifKey] = useState(0);
  const [showFailGif, setShowFailGif] = useState(false);
  const [failGifKey, setFailGifKey] = useState(0);
  const [submitted, setSubmitted] = useState(false); // Add this line
  const correctAnswers = [
    "while(leftSpace != close) { move(left); }",
    "move(up);",
    "while (leftSpace != close) { move(left); }",
    "for (int i = 0; i <5; i++) { if(downSpace == open) move(down); }",
    "while (rightSpace == open) { move(right); }",
    "if (downSpace == open) move(down);",
    "while(rightSpace == open) { move(right); }",
    "if (upSpace == open) move(up);"
  ];


  useEffect(() => {
    setDisabled(!(selectOne && selectTwo && selectThree && selectFour && selectFive && selectSix && selectSeven && selectEight));
    // Update the codeLines state whenever a new option is selected
    setCodeLines([selectOne, selectTwo, selectThree, selectFour, selectFive, selectSix, selectSeven, selectEight].filter(Boolean));
  }, [selectOne, selectTwo, selectThree, selectFour, selectFive, selectSix, selectSeven, selectEight]);

  function handleSubmitClicked() {
    setSubmitted(true); // Set submitted to true when submit is clicked

    // Check if all selected options are correct
    const isAllCorrect = [selectOne, selectTwo, selectThree, selectFour, selectFive, selectSix, selectSeven, selectEight]
      .every((selected, index) => selected === correctAnswers[index]);

    if (isAllCorrect) {
      setShowGif(true); // Show the GIF when all answers are correct
      setGifKey((prevKey) => prevKey + 1); // Increment key to remount the GIF
      setTimeout(() => {
        setShowGif(false); //stop gif
        setSubmitted(false); // Set submitted to false when submit is clicked

      }, 3500);
    } else {
      setShowFailGif(true); // Show the fail GIF when not all answers are correct
      setFailGifKey((prevKey) => prevKey + 1); // Increment key to remount the fail GIF
      setTimeout(() => {
        setShowFailGif(false); //stop gif
        setSubmitted(false); // Set submitted to false when submit is clicked

      }, 3500);
    }
  }
  const isCorrectLine = (line, index) => {
    return submitted && line !== correctAnswers[index]
      ? { color: 'red' }
      : { color: 'inherit' };
  };
  return (
    <div className="page-container">
      <div className="header">
        <Header />
      </div>
      <div className="page-content">
        <div className="actions-container">
          <Select
            className="select-dropdown"
            options={["", "if(leftSpace == open) { move(down); }", " move(left);", "while(leftSpace != close) { move(left); }"]}
            value={selectOne}
            onChange={(e) => setSelectOne(e.target.value)}
          />
          <Select
            className="select-dropdown"
            options={["", "if (upSpace != open) move(up);", "move(up);", "if (downSpace == open) move(up);"]}
            value={selectTwo}
            onChange={(e) => setSelectTwo(e.target.value)}
          />
          <Select
            className="select-dropdown"
            options={["", "if (leftSpace == close) { move(left); }", "while (leftSpace != close) { move(left); }"," move(left);"]}
            value={selectThree}
            onChange={(e) => setSelectThree(e.target.value)}
          />
          {/* for (int i = 0; i <5; i++) { if(downSpace==open) move(down); } */}
          <Select
            className="select-dropdown"
            options={["", "for (int i = 0; i <5; i++) { if(downSpace == open) move(down); }", "while (leftSpace != close) { move(left); }", "if(downSpace == open) move(up);"]}
            value={selectFour}
            onChange={(e) => setSelectFour(e.target.value)}
          />
          <Select
            className="select-dropdown"
            options={["", "while (rightSpace == open) { move(right); }", "if (rightSpace == open) move(up);", "if (rightSpace && open) move(left);"]}
            value={selectFive}
            onChange={(e) => setSelectFive(e.target.value)}
          />
          <Select
            className="select-dropdown"
            options={["", "if (leftSpace == open) move(left);", "if (leftSpace == open) move(up);", "if (downSpace == open) move(down);"]}
            value={selectSix}
            onChange={(e) => setSelectSix(e.target.value)}
          />
          <Select
            className="select-dropdown"
            options={["", "while(rightSpace == open) { move(right); }", "if (leftSpace == open) moveleft);"," move(left);"]}
            value={selectSeven}
            onChange={(e) => setSelectSeven(e.target.value)}
          />
          <Select
            className="select-dropdown"
            options={["", "if (upSpace == open) move(up);", "if (leftSpace == open) move(up);", "if (downSpace == open) move(down);"]}
            value={selectEight}
            onChange={(e) => setSelectEight(e.target.value)}
          />
        </div>
        <div className="code-field">
          <div className="code-placeholder">
            {/* Map over codeLines and render each line */}
            {codeLines.map((line, index) => (
              <p key={index} style={isCorrectLine(line, index)}>
                {line}
              </p>
               ))}
          </div>
          <div className="submit-button">
            <Button
              size="large"
              label="Submit"
              disabled={disabled}
              onClick={handleSubmitClicked}
            />
          </div>
        </div>
        {/* Conditional rendering of the start image and the GIF */}
        <div className="maze">
    {showGif ? (
        <Image
            src={levelTwoGif}
            style={{ width: "100%", height: "auto" }} 
        />
    ) : showFailGif ? (
        <Image
            src={levelTwoLose}
            style={{ width: "100%", height: "auto" }} 
        />
    ) : (
        <Image
            src={levelTwoStart}
            style={{ width: "100%", height: "auto" }} 
        />
    )}
</div>
      </div>
    </div>
  );
};
export default LevelTwoPage;
