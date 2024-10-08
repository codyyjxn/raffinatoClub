import React, { useState } from "react";

const ContactField = ({
  type = "text",
  name,
  value,
  onChange,
  placeholder,
  error = false,
  required = false,
  rows = 3,
  onBlur,
  onFocus,
}) => {
  const [inFocused, setInFocused] = useState(false);

  const getInputClasses = () => {
    let baseClasses =
      "w-full py-2 border-b-2 focus:outline-none transition-none";
    if (error) return `${baseClasses} border-red-600`; // this should turn the underline into red
    if (inFocused) return `${baseClasses} border-gray-900`; // this should turn the underline into default
    return `${baseClasses} border-gray-600`;
  };

  const handleFocus = (e) => {
    setInFocused(true);
    onFocus && onFocus(e);
  };

  const handleBlur = (e) => {
    setInFocused(false);
    onBlur && onBlur(e);
  };

  const renderInput = () => {
    if (type === "textarea") {
      return (
        <textarea
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder={placeholder}
          className={`${getInputClasses()} resize-vertical`}
          rows={rows}
          required={required}
        />
      );
    }
    return (
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        placeholder={placeholder}
        className={getInputClasses()}
        required={required}
      />
    );
  };

  return <div className="mb-4 ">{renderInput()}</div>;
};

export default ContactField;
