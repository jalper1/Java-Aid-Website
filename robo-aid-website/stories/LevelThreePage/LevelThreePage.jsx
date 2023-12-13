import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./levelThreePage.css";
import { Header } from "../Header/Header";
import { Select } from "../Select One/Select";
import { MazeOne } from "../Mazes/MazeOne";
import { Button } from "../Button/Button";
import levelThreeGif from "./levelThree.gif"; // Import the GIF
import levelThreeLose from "./levelThreeFailGif.gif";
import startLevelThree from "./startLevelThree.jpeg"; // Import the GIF
import { Image } from "react-bootstrap";

export const LevelThreePage = ({ ...props }) => {
  const [selectOne, setSelectOne] = useState("");
  const [selectTwo, setSelectTwo] = useState("");
  const [selectThree, setSelectThree] = useState("");
  const [selectFour, setSelectFour] = useState("");
  const [selectFive, setSelectFive] = useState("");
  const [selectSix, setSelectSix] = useState("");
  const [selectSeven, setSelectSeven] = useState("");
  const [selectEight, setSelectEight] = useState("");
  const [selectNine, setSelectNine] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [codeLines, setCodeLines] = useState([]); // State to hold the selected options as an array
  const [showGif, setShowGif] = useState(false);
  const [gifKey, setGifKey] = useState(0);
  const [showFailGif, setShowFailGif] = useState(false);
  const [failGifKey, setFailGifKey] = useState(0);
  const [submitted, setSubmitted] = useState(false); // Add this line

  const correctAnswers = [
    "for (int i = 0; i < 4; i++) { move(down); }",

"move(right);",

"while (downSpace == open) { move(down); }",

"for (int i = 0; i < 7; i++) { move(right); }",

"for (int i = 0; i < 5; i++) { move(up); }",

"int i = 0; do { move(left); i++;} while (i < 6);",

"for (int i = 0; i < 4; i++) { move(up); }",

"int i = 0; do move(right); while (++i < 4);",

"if (rightSpace==open || downSpace==open) { if(downSpace==open) { move(down); } else{ move(right); } }"
  ];


  useEffect(() => {
    setDisabled(!(selectOne && selectTwo && selectThree && selectFour && selectFive && selectSix && selectSeven && selectEight && selectNine));
    // Update the codeLines state whenever a new option is selected
    setCodeLines([selectOne, selectTwo, selectThree, selectFour, selectFive, selectSix, selectSeven, selectEight, selectNine].filter(Boolean));
  }, [selectOne, selectTwo, selectThree, selectFour, selectFive, selectSix, selectSeven, selectEight, selectNine]);

  function handleSubmitClicked() {
    setSubmitted(true); // Set submitted to true when submit is clicked

    // Check if all selected options are correct
    const isAllCorrect = [selectOne, selectTwo, selectThree, selectFour, selectFive, selectSix, selectSeven, selectEight, selectNine]
      .every((selected, index) => selected === correctAnswers[index]);

    if (isAllCorrect) {
      setShowGif(true); // Show the GIF when all answers are correct
      setGifKey((prevKey) => prevKey + 1); // Increment key to remount the GIF
      setTimeout(() => {
        setShowGif(false);
        setSubmitted(false); // Set submitted to false when submit is clicked

      }, 4900);
    } else {
      setShowFailGif(true); // Show the fail GIF when not all answers are correct
      setFailGifKey((prevKey) => prevKey + 1); // Increment key to remount the fail GIF
      setTimeout(() => {
        setShowFailGif(false);
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
            options={["", "for (int i = 0; i < 4; i++) { move(down); }", "if (downSpace == open) { move(down); }", "while (downSpace == open) { move(up); }"]}
            value={selectOne}
            onChange={(e) => setSelectOne(e.target.value)}
          />
          <Select
            className="select-dropdown"
            options={["", "move(up);", "move(right);", "move();"]}
            value={selectTwo}
            onChange={(e) => setSelectTwo(e.target.value)}
          />
          <Select
            className="select-dropdown"
            options={["", "if(downSpace != closed) move(down);", "while (downSpace != open) { move(up); }", "while (downSpace == open) { move(down); }"]}
            value={selectThree}
            onChange={(e) => setSelectThree(e.target.value)}
          />
          <Select
            className="select-dropdown"
            options={["", "for (int i = 0; i < 3; i++) { move(right); }", "for (int i = 0; i < 7; i++) { move(right); }", "if(rightSpace == open) { move(right); }"]}
            value={selectFour}
            onChange={(e) => setSelectFour(e.target.value)}
          />
          <Select
            className="select-dropdown"
            options={["", "for (int i = 0; i < 5; i++) { move(up); }", "if(leftSpace == open) move(left);", "while (leftSpace == open) { move(left); }"]}
            value={selectFive}
            onChange={(e) => setSelectFive(e.target.value)}
          />
          <Select
            className="select-dropdown"
            options={["", "if(leftSpace == open) move(left);", "int i = 0; do { move(left); i++;} while (i < 6);", "while (upSpace == open) { move(down); }"]}
            value={selectSix}
            onChange={(e) => setSelectSix(e.target.value)}
          />
          <Select 
            className="select-dropdown"
            options={["", "for (int i = 0; i < 4; i++) { move(down); }", "if(upSpace == closed) move(down);", "for (int i = 0; i < 4; i++) { move(up); }"]}
            value={selectSeven}
            onChange={(e) => setSelectSeven(e.target.value)}
          />
          <Select
            className="select-dropdown"
            options={["", "move(up);", "int i = 0; do move(right); while (++i < 4);", "if(upSpace == open) move(up);"]}
            value={selectEight}
            onChange={(e) => setSelectEight(e.target.value)}
          />
          <Select
            className="select-dropdown"
            options={["", "if (rightSpace==open || downSpace==open) { if(downSpace==open) { move(down); } else{ move(right); } }", 
            "for(int i = 0; i < 4; i++) { move(up); }", "while (rightSpace != open) { move(right); }"]}
            value={selectNine}
            onChange={(e) => setSelectNine(e.target.value)}
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
            src={levelThreeGif}
            style={{ width: "100%", height: "auto" }} 
        />
    ) : showFailGif ? (
        <Image
            src={levelThreeLose}
            style={{ width: "100%", height: "auto" }} 
        />
    ) : (
        <Image
            src={startLevelThree}
            style={{ width: "100%", height: "auto" }} 
        />
    )}
</div>
      </div>
    </div>
  );
};
export default LevelThreePage;
