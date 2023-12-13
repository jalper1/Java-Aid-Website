import React from "react";
import PropTypes from "prop-types";
import "./instructions.css";
import { Header } from "../Header/Header";
import { Link } from "react-router-dom";
import { Button } from "../Button/Button";

/**
 * A component representing the home page of the educational site.
 * @returns - The JSX code representing the home page.
 */
export const Instructions = () => {
  return (
    <div className="home-page">
      <Header />
      <section className="hero-section">
        <div className="hero-content">
          <h1>Instructions!</h1>
          <p>
            To complete the maze, you must guide the robot through by deciding
            which direction it will move!
          </p>
          <p>Use the dropdown menus to decide how the robot will move.</p>
          <p>Click the "Submit" button to see if you were right!</p>
          <p>Each level will get progressively harder, so be prepared!</p>
          <p>Remember, the robot can only move up, down, left, and right!</p>
          <p>Also, the robot cannot move through walls!</p>
          <p>Finally, the robot cannot move diagonally!</p>
          <p>
            You must be logged in to submit your code to the leaderboard, but
            you can practice to your hearts content!
          </p>
          <p>Good luck!</p>
        </div>
      </section>
    </div>
  );
};

export default Instructions;
