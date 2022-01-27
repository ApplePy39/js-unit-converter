import { useState } from "react";

const DropdownInput = ({ selected, setSelected }) => {
    const [isActive, setIsActive] = useState(false);
    const options = [
        "Millimeters",
        "Centimeters",
        "Meters",
        "Kilometers",
        "Inches",
        "Feet",
        "Miles"
    ];

    const number = 0;

  return (
      <div className="dropdown">
        <div className="dropdown-btn" onClick={(e) =>
            setIsActive(!isActive)}>
            {selected ? selected : "Select a unit"}
        </div>
          {isActive && (
        <div className="dropdown-content">
            {options.map(option => (
                <div onClick={(e) => {
                    setSelected(option);
                    setIsActive(false);
                }}
                     className="dropdown-item">
                    {option}
                </div>
            ))}
        </div>
          )}
      </div>
  )
};

export default DropdownInput;
