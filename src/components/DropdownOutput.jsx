import { useState } from "react";

const DropdownOutput = ({ selectedOutput, setSelectedOutput }) => {
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

    return (
        <div className="dropdown moved">
            <div className="dropdown-btn" onClick={(e) =>
                setIsActive(!isActive)}>
                {selectedOutput ? selectedOutput : "Select a unit"}
            </div>
            {isActive && (
                <div className="dropdown-content">
                    {options.map(option => (
                        <div onClick={(e) => {
                            setSelectedOutput(option);
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

export default DropdownOutput;

