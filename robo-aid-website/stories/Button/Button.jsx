import React from "react";
import PropTypes from "prop-types";
import "./button.css";
import { Link } from "react-router-dom";

/**
 * Primary UI component for user interaction
 * @param props - The props object
 * @param props.primary - Is this the principal call to action on the page?
 * @param props.backgroundColor - What background color to use
 * @param props.size - How large should the button be? One of "small", "medium", or "large"
 * @param props.label - Button contents
 * @param props.onClick - Optional click handler
 * @param props.disabled - Is the button disabled?
 * @param props.link - Is the button a link?
 * @param props.destination - The destination of the link
 * @returns - A button element with the specified props
 */
export const Button = ({
  primary,
  backgroundColor,
  size,
  label,
  disabled,
  destination,
  ...props
}) => {
  const mode = primary
    ? "storybook-button--primary"
    : "storybook-button--secondary";
  const handleClick = () => {
    if (props.onClick) {
      props.onClick();
    }
  };
  return (
    <Link to={destination}>
      <button
        disabled={disabled}
        type="button"
        className={["storybook-button", `storybook-button--${size}`, mode].join(
          " "
        )}
        style={backgroundColor && { backgroundColor }}
        onClick={handleClick}
        {...props}
      >
        {label}
      </button>
    </Link>
  );
};

Button.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(["small", "medium", "large"]),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
  /**
   * Is the button disabled?
   */
  disabled: PropTypes.bool,
  /**
   * The destination of the link
   */
  destination: PropTypes.string,
};

Button.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: "medium",
  onClick: undefined,
  disabled: false,
};
