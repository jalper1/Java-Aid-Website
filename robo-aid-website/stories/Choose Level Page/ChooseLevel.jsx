import React from "react";
import "./chooseLevel.css";
import PropTypes from "prop-types";
import { Button } from "../Button/Button";
import { Header } from "../Header/Header";
import { InstructionPage } from "../InstructionPage/InstructionPage";

const ChooseLevelPage = () => {
  return (
    <div>
      <Header />
      <div className="levels-container">
        <h1>Choose your level!</h1>

        <div className="level-section">
          <h2>Practice</h2>
          <div className="Practice_Buttons">
            <Button
              label={"Easy"}
              onClick={() => sessionStorage.setItem("Mode", "Practice")}
              destination={"/levelone"}
            ></Button>
            <Button
              label={"Medium"}
              onClick={() => sessionStorage.setItem("Mode", "Practice")}
              destination={"/leveltwo"}
            ></Button>
            <Button
              label={"Hard"}
              onClick={() => sessionStorage.setItem("Mode", "Practice")}
              destination={"/levelthree"}
            ></Button>
          </div>
        </div>

        <h2>Tournament</h2>
        {sessionStorage.getItem("logstatus") === "loggedin" ? (
          <div className="level-section">
            <div className="Practice_Buttons">
              <Button
                label={"Easy"}
                onClick={() => sessionStorage.setItem("Mode", "Tournament")}
                destination={"/levelone"}
              ></Button>
              <Button
                label={"Medium"}
                onClick={() => sessionStorage.setItem("Mode", "Tournament")}
                destination={"/leveltwo"}
              ></Button>
              <Button
                label={"Hard"}
                onClick={() => sessionStorage.setItem("Mode", "Tournament")}
                destination={"/levelthree"}
              ></Button>
            </div>
          </div>
        ) : (
          <div>Please log in to enter tournament mode</div>
        )}
      </div>
    </div>
  );
};

export default ChooseLevelPage;
