import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./levelOnePage.css";
import levelOneGif from "./levelOne.gif"; // Import the GIF
import Start from "./startLevelOne.jpg"; // Import the image as a default
import levelOneLose from "./levelOneLose.gif"; // Import the lose GIF when you lose
import { Image } from "react-bootstrap";
import { Header } from "../Header/Header";
import { Select } from "../Select One/Select";
import { Button } from "../Button/Button";
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
// LevelOnePage component displays a page with a header, three dropdowns for selecting options, a submit button, a code display area, and a maze.
export const LevelOnePage = ({ ...props }) => {
  // State for managing the selections of the three dropdowns.
  const [selectOne, setSelectOne] = useState("");
  const [selectTwo, setSelectTwo] = useState("");
  const [showGif, setShowGif] = useState(false);
  const [gifKey, setGifKey] = useState(0);
  const [showFailGif, setShowFailGif] = useState(false);
  const [failGifKey, setFailGifKey] = useState(0);
  // State for managing the disabled state of the submit button.
  const [disabled, setDisabled] = useState(true);
  // State to hold the selected options as an array for display.
  const [codeLines, setCodeLines] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  const correctAnswers = [
    "while(leftSpace == open) { move(left); }",
    "while(downSpace == open) { move(down); }"
  ];

  // useEffect hook to update the disabled state of the button and the code lines whenever the dropdown selections change.
  useEffect(() => {
    setDisabled(!(selectOne && selectTwo));
    setCodeLines([selectOne, selectTwo].filter(Boolean));
  }, [selectOne, selectTwo]);

  // Function to handle the submit button click event.
  function handleSubmitClicked() {
    setSubmitted(true);
   // Check if all selected options are correct
   const isAllCorrect = [selectOne, selectTwo]
   .every((selected, index) => selected === correctAnswers[index]);
   

 if (isAllCorrect) {
   setShowGif(true); // Show the GIF when all answers are correct
   setGifKey((prevKey) => prevKey + 1); // Increment key to remount the GIF
   setTimeout(() => {
     setShowGif(false);
     setSubmitted(false);
   }, 2000);
 } else {
   setShowFailGif(true); // Show the fail GIF when not all answers are correct
   setFailGifKey((prevKey) => prevKey + 1); // Increment key to remount the fail GIF
   setTimeout(() => {
     setShowFailGif(false);
     setSubmitted(false);
   }, 5000);
 }
  }
  const isCorrectLine = (line, index) => {
    return submitted && line !== correctAnswers[index]
      ? { color: 'red' }
      : { color: 'inherit' };
  };
  return (
    <div className="page-container">
      {/* Header section of the page */}
      <div className="header">
        <Header />
      </div>

      {/* Main content of the page */}
      <div className="page-content">
        {/* Container for the dropdown selections and submit button */}
        <div className="actions-container">
          {/* Three dropdowns for selecting options */}
          <Select
            className="select-dropdown"
            options={[
              "",
              "while(leftSpace == open) { move(left); }" ,
             "if (leftWall == open) move(left);",
             "while (open) { move(left); }"]}
            value={selectOne}
            onChange={(e) => setSelectOne(e.target.value)}
          />
          <Select
            className="select-dropdown"
            options={["", "while (downspace != open) { move(down) }", "while(downSpace == open) { move(down); }", "if (downSpace == open) move(down)"]}
            value={selectTwo}
            onChange={(e) => setSelectTwo(e.target.value)}
          />
          
          {/* Submit button */}
          <div className="submit-button">
            <Button
              size="large"
              label="Submit"
              disabled={disabled}
              onClick={handleSubmitClicked}
            />
          </div>
        </div>

        {/* Code display area */}
        <div className="code-field">
          <div className="code-placeholder">
            {codeLines.map((line, index) => (
              <p key={index} style={isCorrectLine(line, index)}>
              {line}
            </p>
            ))}
          </div>
        </div>

        <div className="maze">
    {showGif ? (
        <Image
            src={levelOneGif}
            style={{ width: "100%", height: "auto" }} 
        />
    ) : showFailGif ? (
        <Image
            src={levelOneLose}
            style={{ width: "100%", height: "auto" }} 
        />
    ) : (
        <Image
            src={Start}
            style={{ width: "100%", height: "auto" }} 
        />
    )}
    
</div>
        
        
      </div>
    </div>
  );
};


export default LevelOnePage;
