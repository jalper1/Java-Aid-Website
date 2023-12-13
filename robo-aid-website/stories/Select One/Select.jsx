import React from "react";
import PropTypes from "prop-types";
import "./select.css";

/**
 * A select component that renders a dropdown menu with selectable options.
 * @param {Object} props - The props object containing options, value, onChange, and any other additional props.
 * @param {Array} props.options - An array of options to be rendered in the dropdown menu.
 * @param {string} props.value - The currently selected option value.
 * @param {function} props.onChange - A function to be called when the selected option changes.
 * @returns {JSX.Element} - A select element with options.
 */
export const Select = ({ options, value, onChange, ...props }) => {
  return (
    <>
      <select className="select_class" value={value} onChange={onChange}>
        {options.map((option, index) => (
          <option value={option} key={index} className="option-item">
            {option}
          </option>
        ))}
      </select>
    </>
  );
};

// Define the prop types for the Select component
Select.propTypes = {
  options: PropTypes.array, // An array of options to be rendered in the dropdown menu
  value: PropTypes.string, // The currently selected option value
  onChange: PropTypes.func, // A function to be called when the selected option changes
};

// Set default props for the Select component
Select.defaultProps = {
  options: ["first", "second", "third"], // Default options to be rendered in the dropdown menu
};
export default Select;
