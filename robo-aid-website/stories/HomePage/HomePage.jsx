import React from "react";
import PropTypes from "prop-types";
import "./homePage.css";
import { Header } from "../Header/Header";
import { Link } from "react-router-dom";
import { Button } from "../Button/Button";

/**
 * A component representing the home page of the educational site.
 * @returns - The JSX code representing the home page.
 */
export const HomePage = () => {
  return (
    <div className="home-page">
      <Header />
      <section className="hero-section">
        <div className="hero-content">
          <h1>Welcome to Beep Boop's Coding Maze!</h1>
          <p>Learn to code in a fun and interactive way.</p>
        </div>
        <Button
          size={"large"}
          primary={true}
          label={"Choose Level"}
          destination={"/chooselevel"}
        ></Button>
      </section>
    </div>
  );
};

export default HomePage;
