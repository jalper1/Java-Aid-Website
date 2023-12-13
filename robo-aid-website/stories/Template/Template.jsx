// Import React lol
import React from "react";
// import PropTypes so you can use props
import PropTypes from "prop-types";
// import your css here
import "./template.css";

/**
 * Template Component
 *
 * "text" is the only prop here, make sure to always have ...props at the end to pass the props through even if you never use it.
 *  You might use it later
 */
export const Template = ({ text, ...props }) => {
  // You will put any state variables, functions, or useEffect hooks heres
  // This return statement contains what will be displayed on the screen, its just HTML
  return (
    // You can use any HTML in this return statement
    <>
      {/* divs are your most basic form of HTML, a blank section */
      /* This will just display whatever is given for the text prop on the screen, or the default if nothing is given*/}
      <div><select></select></div>
      {/* Using className will allow you to apply css to that specific div. You can give anything a className*/}
      <div className="select-class">I have been changed by css</div>
      {/* <button className="button-example">Button</button> */}
    </>
  );
};
// You can run npm run storybook to see what this Template looks like in storybook

// This is used to define what type your prop is
Template.propTypes = {
  // The text prop is a string.
  text: PropTypes.string,
  // I would say:
  // text: PropTypes.string.isRequired if I wanted to make that prop a requirment when using the component
};

// All this is used for is to set a default value for any props in case there is no input for them
Template.defaultProps = {
  text: "default text",
};
