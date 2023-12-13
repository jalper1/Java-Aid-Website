import React from "react";
import PropTypes from "prop-types";
import "./robot.css";

/**
 * Robot figure that moves through the maze
 * @param props - The props object
 * @param props.image - Url of image of robot
 * @returns - The Robot component
 */
export const Robot = ({ image, ...props }) => {
  return <img className="image" src={image} alt="robot-image"></img>;
};

Robot.propTypes = {
  /**
   * Url of image of robot
   */
  image: PropTypes.string.isRequired,
};
