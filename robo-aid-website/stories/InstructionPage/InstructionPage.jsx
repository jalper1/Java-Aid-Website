import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./instructionPage.css";

/**
 * A component that displays a robot figure and a list of instructions in a popout.
 * @param props - The component props.
 * @param props.image - The URL of the image of the robot.
 * @param props.instructions - The list of instructions to be displayed in the popout.
 * @param props.openDirection - The direction in which the popout should open (e.g. "down-right").
 * @returns - The rendered component.
 */
export const InstructionPage = ({
  image,
  instructions,
  openDirection,
  ...props
}) => {
  const [maxInstructionWidth, setMaxInstructionWidth] = useState("auto");

  /**
   * Event handler for when the mouse enters the component.
   * Calculates the maximum width of the popout based on the length of the longest instruction.
   */
  const handleMouseEnter = () => {
    const maxLineLength = Math.max(
      ...instructions.map((instruction) => instruction.length)
    );
    const maxWidth = `${maxLineLength * 8}px`;
    setMaxInstructionWidth(maxWidth);
  };

  /**
   * Event handler for when the mouse leaves the component.
   * Resets the maximum width of the popout to 0.
   */
  const handleMouseLeave = () => {
    setMaxInstructionWidth("0");
  };

  return (
    <div
      className="tooltip-ip"
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
    >
      <img className="image-ip" src={image} alt="info-image"></img>
      <div
        className={`instruction-page ${openDirection}`}
        style={{ width: maxInstructionWidth }}
      >
        <ol>
          {instructions.map((instruction, index) => (
            <li className="list-item-ip" key={index}>
              {instruction}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

InstructionPage.propTypes = {
  /**
   * The URL of the image of the robot.
   */
  image: PropTypes.string.isRequired,
  /**
   * The list of instructions to be displayed in the popout.
   */
  instructions: PropTypes.arrayOf(PropTypes.string).isRequired,
  /**
   * The direction in which the popout should open (e.g. "down-right").
   */
  openDirection: PropTypes.string,
};

InstructionPage.defaultProps = {
  instructions: [
    "instruction one",
    "instruction two",
    "instruction three",
    "etc...",
  ],
  image: "../../images/info_icon.png",
  openDirection: "down-right",
};
