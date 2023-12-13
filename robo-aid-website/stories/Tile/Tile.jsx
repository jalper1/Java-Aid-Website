import React from "react";
import PropTypes from "prop-types";
import "./tile.css";

/**
 * A tile component for maze building.
 *
 * @component
 * @param props - The props object.
 * @param props.isWall - If this tile is a wall.
 * @param props.isGoal - If this tile is a goal.
 * @param props.isStart - If this tile is the start.
 * @returns - A tile element.
 */
export const Tile = ({ isWall, isGoal, isStart, ...props }) => {
  const tileClassName = `tile tile${isWall ? "-wall" : ""}${
    isGoal ? "-goal" : ""
  }${isStart ? "-start" : ""}`;

  return <div className={tileClassName} {...props}></div>;
};

Tile.propTypes = {
  /**
   * If this tile is a wall.
   */
  isWall: PropTypes.bool,
  /**
   * If this tile is a goal.
   */
  isGoal: PropTypes.bool,
  /**
   * If this tile is the start.
   */
  isStart: PropTypes.bool,
};

Tile.defaultProps = {
  isWall: false,
  isGoal: false,
  isStart: false,
};
