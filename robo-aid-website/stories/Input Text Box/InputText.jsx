import React from "react";
import PropTypes from "prop-types";
import "./inputText.css";

/**
 * A text input component for user text-based interaction.
 *
 * @component
 * @param props - The component props.
 * @param props.label - The label for the input field.
 * @param props.value - The value of the input field.
 * @param props.onChange - The function to call when the input field changes.
 * @param props.id - The ID of the input field.
 * @param props.password - Whether the input field is a password field.
 * @param props.success - Whether the input field should display a success state.
 * @param props.error - Whether the input field should display an error state.
 * @param props.disabled - Whether the input field should be disabled.
 * @return - The rendered component.
 */
export const InputText = ({
  password,
  label,
  value,
  id,
  error,
  success,
  disabled,
  errorMessage,
  ...props
}) => {
  const inputClassName = `input-text-field ${error ? "error" : ""}${
    success ? "success" : ""
  }`;
  return (
    <div className="container">
      <input
        disabled={disabled}
        id={id}
        type={password ? "password" : "text"}
        className={inputClassName}
        placeholder={label}
        value={value}
        {...props}
      ></input>
      {error && <p className="error-state">{errorMessage}</p>}
      {success && <p className="success-state">Passwords match!</p>}
    </div>
  );
};

InputText.propTypes = {
  /**
   * The label for the input field.
   */
  label: PropTypes.string.isRequired,
  /**
   * The value of the input field.
   */
  value: PropTypes.string,
  /**
   * The function to call when the input field changes.
   */
  onChange: PropTypes.func,
  /**
   * The ID of the input field.
   */
  id: PropTypes.string,
  /**
   * Whether the input field is a password field.
   */
  password: PropTypes.bool,
  /**
   * Whether the input field should display a success state.
   */
  success: PropTypes.bool,
  /**
   * Whether the input field should display an error state.
   */
  error: PropTypes.bool,
  /**
   * Whether the input field should be disabled.
   */
  disabled: PropTypes.bool,
  /**
   * Error message to display
   */
  errorMessage: PropTypes.string,
};

InputText.defaultProps = {
  password: false,
  onChange: undefined,
  value: null,
  id: null,
  success: false,
  error: false,
  disabled: false,
};
