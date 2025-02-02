import React, { useState } from "react";

function NewTask({ onClose, onTaskAdded, taskToEdit, onTaskUpdated }) {
  const [selectedTaskOption, setSelectedTaskOption] = useState(
    taskToEdit ? taskToEdit.taskOption : ""
  );
  const [dateTime, setDateTime] = useState(
    taskToEdit ? taskToEdit.dateTime : ""
  );
  const [selectedPriority, setSelectedPriority] = useState(
    taskToEdit ? taskToEdit.priority : ""
  );
  const [selectedColor, setSelectedColor] = useState(
    taskToEdit ? taskToEdit.color : ""
  );
  const [title, setTitle] = useState(taskToEdit ? taskToEdit.title : "");
  const [description, setDescription] = useState(
    taskToEdit ? taskToEdit.description : ""
  );

  const priorities = ["Later", "Regular", "Important", "Essential"];
  const colors = [
    { name: "#90B9E0", className: "bg-Sky-Blue" },
    { name: "#9BEA96", className: "bg-Mint-Green" },
    { name: "#E7C3C3", className: "bg-Dusty-Rose" },
    { name: "#E9D889", className: "bg-Golden-Sand" },
    { name: "#FACA96", className: "bg-Apricot" },
  ];

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleOptionChange = (value) => {
    if (selectedTaskOption !== value) {
      // Clear data when switching between sections
      if (value === "Setting Priorities") {
        setDateTime("");
      } else if (value === "Establishing a Deadline") {
        setSelectedPriority("");
        setSelectedColor("");
      }
    }
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
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (selectedTaskOption === "Setting Priorities" && !selectedColor) {
      alert("Please choose a color for the task.");
      return;
    }

    const formData = {
      title,
      description,
      taskOption: selectedTaskOption,
      dateTime:
        selectedTaskOption === "Establishing a Deadline" ? dateTime : "",
      priority:
        selectedTaskOption === "Setting Priorities" ? selectedPriority : "",
      color:
        selectedTaskOption === "Establishing a Deadline"
          ? "#DA4244"
          : selectedColor,
      isPin: false,
      isDone: false,
    };

    const existingTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    if (taskToEdit) {
      const taskIndex = existingTasks.findIndex(
        (task) =>
          task.title === taskToEdit.title &&
          task.description === taskToEdit.description
      );
      if (taskIndex !== -1) {
        existingTasks[taskIndex] = formData;
      }
    } else {
      existingTasks.push(formData);
    }
    localStorage.setItem("tasks", JSON.stringify(existingTasks));

    if (onTaskAdded) {
      onTaskAdded();
    }

    if (onTaskUpdated) {
      onTaskUpdated();
    }

    // Clear the form state
    setTitle("");
    setDescription("");
    setSelectedTaskOption("");
    setDateTime("");
    setSelectedPriority("");
    setSelectedColor("");

    if (onClose) {
      onClose();
    }
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
        bg-Light-Sky dark:bg-Dark-Teal
        shadow-form tracking-wide"
    >
      <form
        onSubmit={handleSubmit}
        className="h-full flex flex-col space-y-4 font-Roboto text-Gunmetal dark:text-Pale-Mint"
      >
        {/* Title input */}
        <div>
          <input
            type="text"
            id="title"
            placeholder="Title..."
            className="w-full p-2 border text-sm rounded-md focus:ring-1 focus:ring-Cool-Gray dark:focus:ring-Soft-Beige focus:outline-none bg-Pale-Mint dark:bg-Deep-Steel"
            required
            autocomplete="off"
            value={title}
            onChange={handleTitleChange}
          />
        </div>

        {/* Description input */}
        <div>
          <label
            htmlFor="description"
            className="block text-sm text-Gunmetal dark:text-Cool-Aqua"
          >
            Description
          </label>
          <textarea
            id="description"
            maxLength={250}
            className="w-full p-2 border text-sm rounded-md max-h-24 min-h-24 focus:ring-1 focus:ring-Cool-Gray dark:focus:ring-Soft-Beige focus:outline-none bg-Pale-Mint dark:bg-Deep-Steel"
            value={description}
            onChange={handleDescriptionChange}
          ></textarea>
        </div>

        {/* Choose one input */}
        <div className="text-Gunmetal dark:text-Cool-Aqua">
          <p className="text-sm">Choose one:</p>
          <div className="inline-block space-y-2 mt-2">
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
              <span className="ml-2 text-sm cursor-pointer">
                Setting Priorities
              </span>
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
              <span className="ml-2 text-sm cursor-pointer">
                Establishing a Deadline
              </span>
            </label>
          </div>
        </div>

        {/* Setting Priorities Section */}
        {selectedTaskOption === "Setting Priorities" && (
          <div className="flex flex-col items-center gap-1 pt-2 sm:pt-4">
            {priorities.map((priority) => (
              <label key={priority} className="priorities dark:bg-Ocean-Blue">
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
                      ? "shadow-none ring-1 ring-Charcoal-Blue dark:ring-Cherry"
                      : ""
                  }`}
                  onClick={() => handleColorClick(name)}
                  style={{ cursor: "pointer" }}
                ></button>
              ))}
            </div>
          </div>
        )}

        {/* Establishing a Deadline Section */}
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
              className="p-2 border border-Pale-Mint dark:border-Ocean-Blue rounded-lg dark:bg-Ocean-Blue"
              required
            />
          </div>
        )}

        {/* ADD Button */}
        <div
          className={`flex flex-grow mt-4 ${
            taskToEdit
              ? "flex-row justify-center gap-3"
              : "flex-col justify-end"
          }`}
        >
          <button
            type="submit"
            className="h-8 w-28 sm:w-36 bg-Charcoal-Blue dark:bg-Emerald-Teal text-white rounded-md self-center"
          >
            {taskToEdit ? "Edit" : "Add"}
          </button>
          {taskToEdit && (
            <button
              type="button"
              className="h-8 w-28 sm:w-36 bg-Cherry text-white rounded-md self-center"
              onClick={() => {
                if (window.confirm("Discard changes?")) {
                  onClose();
                }
              }}
            >
              Cancel
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default NewTask;
