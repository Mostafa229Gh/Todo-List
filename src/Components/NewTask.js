import React, { useState } from "react";

function NewTask() {
  const [selectedTaskOption, setSelectedTaskOption] = useState("");
  const [dateTime, setDateTime] = useState("");
  const [selectedPriority, setSelectedPriority] = useState("");
  const [selectedColor, setSelectedColor] = useState("");

  const priorities = ["Later", "Regular", "Important", "Essential"];
  const colors = [
    { name: "#90B9E0", className: "bg-Sky-Blue" },
    { name: "#9BEA96", className: "bg-Mint-Green" },
    { name: "#E7C3C3", className: "bg-Dusty-Rose" },
    { name: "#E9D889", className: "bg-Golden-Sand" },
    { name: "#FACA96", className: "bg-Apricot" },
  ];

  const handleOptionChange = (value) => {
    setSelectedTaskOption(value);
  };

  const handleDateTimeChange = (event) => {
    setDateTime(event.target.value);
  };

  const handlePriorityChange = (priority) => {
    setSelectedPriority(priority);
  };

  const handleColorClick = (color) => {
    setSelectedColor(color);
    console.log(color);
  };

  return (
    <div
      className="
        w-80 sm:w-1/2 
        h-[78%] sm:h-4/5 
        px-3.5 py-4 
        fixed top-1/2 left-1/2 -translate-x-1/2 
        -translate-y-1/2 sm:-translate-y-[55%] 
        rounded-xl 
        bg-Light-Sky 
        shadow-form"
    >
      <form
        action=""
        className="h-full flex flex-col space-y-4 font-Roboto text-Gunmetal"
      >
        {/* Title input */}
        <div>
          <input
            type="text"
            id="title"
            placeholder="Title..."
            className="w-full p-2 border text-sm rounded-md focus:ring-1 focus:ring-Cool-Gray focus:outline-none bg-Pale-Mint"
            required
          />
        </div>

        {/* Description input */}
        <div>
          <label htmlFor="description" className="block text-sm text-Gunmetal">
            Description
          </label>
          <textarea
            id="description"
            maxLength={120}
            className="w-full p-2 border text-sm rounded-md max-h-24 min-h-24 focus:ring-1 focus:ring-Cool-Gray focus:outline-none bg-Pale-Mint"
          ></textarea>
        </div>

        {/* Choose one input */}
        <div className="text-Gunmetal">
          <p className="text-sm">Choose one:</p>
          <div className="space-y-2 mt-2">
            <label className="flex items-center">
              <input
                type="radio"
                name="taskOption"
                value="Setting Priorities"
                checked={selectedTaskOption === "Setting Priorities"}
                onChange={(e) => handleOptionChange(e.target.value)}
                className="form-checkbox"
                required
              />
              <span className="ml-2 text-sm">Setting Priorities</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="taskOption"
                value="Establishing a Deadline"
                checked={selectedTaskOption === "Establishing a Deadline"}
                onChange={(e) => handleOptionChange(e.target.value)}
                className="form-checkbox"
                required
              />
              <span className="ml-2 text-sm">Establishing a Deadline</span>
            </label>
          </div>
        </div>

        {selectedTaskOption === "Setting Priorities" && (
          <div className="flex flex-col items-center gap-1 pt-2 sm:pt-4">
            {priorities.map((priority) => (
              <label key={priority} className="priorities">
                <input
                  type="radio"
                  name="priorityOption"
                  value={priority}
                  checked={selectedPriority === priority}
                  onChange={() => handlePriorityChange(priority)}
                  className="form-checkbox"
                  required
                />
                <span className="ml-2 text-sm">{priority}</span>
              </label>
            ))}
            <div className="mt-5 flex gap-2">
              {colors.map(({ name, className }) => (
                <button
                  type="button"
                  key={name}
                  className={`w-10 h-10 rounded-full ${className} shadow-form ${
                    selectedColor === name
                      ? "shadow-none ring-1 ring-Charcoal-Blue "
                      : ""
                  }`}
                  onClick={() => handleColorClick(name)}
                  style={{ cursor: "pointer" }}
                ></button>
              ))}
            </div>
          </div>
        )}

        {selectedTaskOption === "Establishing a Deadline" && (
          <div className="flex flex-col items-center pt-8">
            <label htmlFor="datetime" className="text-sm">
              Select Date and Time:
            </label>
            <input
              type="datetime-local"
              id="datetime"
              value={dateTime}
              onChange={handleDateTimeChange}
              className="p-2 border border-Pale-Mint rounded-lg"
            />
          </div>
        )}

        <div className="flex flex-col flex-grow justify-end mt-4">
          <button
            type="submit"
            className="fixed h-8 w-28 sm:w-36 bg-Charcoal-Blue text-white rounded-md self-center"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
}

export default NewTask;
