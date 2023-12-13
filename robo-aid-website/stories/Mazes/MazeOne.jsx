import React, { useState } from "react";
import PropTypes from "prop-types";
import "./maze.css";
import { Tile } from "../Tile/Tile";
import { Robot } from "../Robot/Robot";

/**
 * A maze component that renders a maze with a robot and a goal.
 *
 * @component
 * @param props - The props object.
 * @returns - The maze component.
 */
export const MazeOne = ({ ...props }) => {
  /**
   * Moves the robot by a given amount in the x and y directions.
   *
   * @param dx - The amount to move in the x direction.
   * @param dy - The amount to move in the y direction.
   */
  const moveRobot = (dx, dy) => {};

  return (
    <div className="container">
      <div className="maze-container">
        <div className="row-one">
          <Tile isWall={true} />
          <Tile isWall={true} />
          <Tile isWall={true} />
          <Tile isWall={true} />
          <Tile isWall={true} />
          <Tile isWall={true} />
        </div>
        <div className="row-two">
          <Tile isWall={true} />
          <div className="start">
            <Tile isStart={true} />
            <div className="robot-container">
              <Robot className="robot" image={"../../images/robot.jpg"} />
            </div>
          </div>
          <Tile />
          <Tile />
          <Tile />
          <Tile isGoal={true} />
        </div>
        <div className="row-three">
          <Tile isWall={true} />
          <Tile isWall={true} />
          <Tile isWall={true} />
          <Tile isWall={true} />
          <Tile isWall={true} />
          <Tile isWall={true} />
        </div>
        <div className="row-four">
          <Tile isWall={true} />
          <Tile isWall={true} />
          <Tile isWall={true} />
          <Tile isWall={true} />
          <Tile isWall={true} />
          <Tile isWall={true} />
        </div>
        <div className="row-five">
          <Tile isWall={true} />
          <Tile isWall={true} />
          <Tile isWall={true} />
          <Tile isWall={true} />
          <Tile isWall={true} />
          <Tile isWall={true} />
        </div>
        <div className="row-six">
          <Tile isWall={true} />
          <Tile isWall={true} />
          <Tile isWall={true} />
          <Tile isWall={true} />
          <Tile isWall={true} />
          <Tile isWall={true} />
        </div>
      </div>
    </div>
  );
};

MazeOne.proptypes = {};
MazeOne.defaultProps = {};
