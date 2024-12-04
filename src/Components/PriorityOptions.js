import React, { useState } from "react";

function PriorityOptions({ selectedPriority, onPriorityChange }) {
  const priorities = ["Later", "Regular", "Important", "Essential"];
  const colors = [
    { name: "#90B9E0", className: "bg-Sky-Blue" },
    { name: "#9BEA96", className: "bg-Mint-Green" },
    { name: "#E7C3C3", className: "bg-Dusty-Rose" },
    { name: "#E9D889", className: "bg-Golden-Sand" },
    { name: "#FACA96", className: "bg-Apricot" },
  ];

  const [selectedColor, setSelectedColor] = useState("");

  const handleColorClick = (color) => {
    setSelectedColor(color);
    console.log(color);
  };

  return (
    <div className="flex flex-col items-center gap-1 pt-4">
      {priorities.map((priority) => (
        <label key={priority} className="priorities">
          <input
            type="radio"
            name="priorityOption"
            value={priority}
            checked={selectedPriority === priority}
            onChange={() => onPriorityChange(priority)}
            className="form-checkbox"
            required
          />
          <span className="ml-2 text-sm">{priority}</span>
        </label>
      ))}
      <div className="mt-5 flex gap-2">
        {colors.map(({ name, className }) => (
          <span
            key={name}
            className={`w-10 h-10 rounded-full ${className} shadow-form ${
              selectedColor === name ? "shadow-none ring-1 ring-Charcoal-Blue " : ""
            }`}
            onClick={() => handleColorClick(name)}
            style={{ cursor: "pointer" }}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default PriorityOptions;
