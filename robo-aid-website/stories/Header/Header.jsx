import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button } from "../Button/Button";
import "./header.css";
import { HamburgerMenu } from "../Hamburger Menu/HamburgerMenu";
import { Link, Outlet } from "react-router-dom";

/**
 * Header component that displays a header with a title, menu, and user authentication buttons.
 * @param props - The props object that contains the following properties:
 * @param props.user - The user object that contains the user's name.
 * @param props.onLogin - The function that handles the login event.
 * @param props.onLogout - The function that handles the logout event.
 * @param props.onCreateAccount - The function that handles the create account event.
 * @param props.menuItems - The array of menu items to be displayed in the hamburger menu.
 * @returns - The JSX element that represents the Header component.
 */
export const Header = ({ ...props }) => {
  const [loginStatus, setLoginStatus] = useState(() => {
    const userData = sessionStorage.getItem("logstatus");
    let tempUserData = "loggedout";
    if (userData) {
      tempUserData = userData;
    }
    return tempUserData;
  });

  /**
   * Function to handle user logout.
   */
  function handleLogout() {
    sessionStorage.setItem("logstatus", "loggedout");
    window.location.href = "/";
  }

  return (
    <header>
      <div className="storybook-header">
        <div className="header-menu">
          <HamburgerMenu
            menuItems={[
              {
                label: "Home",
                destination: "/",
              },
              {
                label: "Choose Level",
                destination: "/chooselevel",
              },
              {
                label: "Leaderboard",
                destination: "/leaderboards",
              },
              {
                label: "Instructions",
                destination: "/instructions",
              },
            ]}
          ></HamburgerMenu>
        </div>
        <div className="header-title">
          <img
            src="../../images/robot.jpg"
            width="32"
            height="32"
            alt="robot face"
          ></img>
          <Link to="/" className="link-button">
            <h1>Beep Boop</h1>
          </Link>
        </div>
        <div>
          {loginStatus === "loggedin" ? (
            <>
              <span className="welcome">
                Welcome, <b>{sessionStorage.getItem("userName")}</b>!
              </span>
              <Button
                size="small"
                onClick={handleLogout}
                label="Log out"
                {...props}
              />
            </>
          ) : (
            <>
              <Button
                destination="/login"
                size="small"
                label="Log in"
                {...props}
              />
              <Button
                destination="/register"
                primary
                size="small"
                label="Sign up"
                {...props}
              />
            </>
          )}
        </div>
      </div>
    </header>
  );
};
export default Header;
Header.propTypes = {};

Header.defaultProps = {};
