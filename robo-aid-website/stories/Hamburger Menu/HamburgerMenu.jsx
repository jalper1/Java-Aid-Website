import React, { useState } from "react";
import PropTypes from "prop-types";
import "./hamburgerMenu.css";

/**
 * HamburgerMenu component displays a hamburger icon that toggles a menu of items when clicked.
 * @param menuItems - An array of objects containing label and destination properties for each menu item.
 * @returns - Returns the HamburgerMenu component.
 */
export const HamburgerMenu = ({ menuItems, ...props }) => {
  const [isOpen, setIsOpen] = useState(false);

  /**
   * Toggles the menu open and closed.
   */
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  /**
   * Handles the click event for each menu item and navigates to the corresponding destination.
   * @param destination - The URL destination for the clicked menu item.
   */
  function handleMenuItemClick(destination) {
    window.location.href = destination;
  }

  return (
    <>
      <div className="hamburger-icon" onClick={toggleMenu}>
        {isOpen ? (
          <img
            src="../../images/hamburger_open.png"
            alt="hamburger icon"
            width="32"
            height="32"
          ></img>
        ) : (
          <img
            src="../../images/Hamburger_icon.png"
            alt="hamburger icon"
            width="32"
            height="32"
          ></img>
        )}
      </div>
      <div className={`menu-items ${isOpen ? "open" : ""}`}>
        {isOpen ? (
          menuItems.map((item, index) => (
            <div
              key={index}
              className={`item ${item.label}`}
              onClick={() => handleMenuItemClick(item.destination)}
            >
              {item.label}
            </div>
          ))
        ) : (
          <div></div>
        )}
      </div>
    </>
  );
};

HamburgerMenu.propTypes = {
  /**
   * An array of objects containing label and destination properties for each menu item.
   */
  menuItems: PropTypes.array.isRequired,
};

HamburgerMenu.defaultProps = {
  menuItems: ["test1", "test2"],
};
