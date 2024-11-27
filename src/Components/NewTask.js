import React from "react";

function NewTask() {
  return (
    <div
      className="
    w-80 sm:w-1/2 
    h-[37.5rem]
    px-3.5 py-4
    fixed 
    top-1/2 left-1/2 
    -translate-x-1/2 -translate-y-1/2 sm:-translate-y-[55%] 
    rounded-xl 
    bg-Light-Sky shadow-form"
    >
      <form
        action=""
        className="h-full flex flex-col space-y-4 font-Roboto text-Gunmetal"
      >
        <div>
          <input
            type="text"
            id="title"
            placeholder="Title..."
            className="w-full p-2 border text-sm rounded-md focus:ring-1 focus:ring-Cool-Gray focus:outline-none bg-Pale-Mint"
            required
          />
        </div>

        <div>
          <label for="description" className="block text-sm text-Gunmetal">
            Description
          </label>
          <textarea
            id="description"
            maxLength={120}
            className="w-full p-2 border text-sm rounded-md max-h-24 min-h-24 focus:ring-1 focus:ring-Cool-Gray focus:outline-none bg-Pale-Mint"
          ></textarea>
        </div>

        <div className="text-Gunmetal">
          <p className="text-sm">Choose one:</p>
          <div className="space-y-2 mt-2">
            <label className="flex items-center">
              <input
                type="radio"
                name="taskOption"
                value="Setting Priorities"
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
                className="form-checkbox"
                required
              />
              <span className="ml-2 text-sm">Establishing a Deadline</span>
            </label>
          </div>
        </div>

        <div>
          {/* Here Should add something */}
        </div>

        <div className="flex flex-col flex-grow justify-end mt-4">
          <button
            type="submit"
            className="h-8 w-28 sm:w-36 bg-Charcoal-Blue text-white rounded-md self-center"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
}

export default NewTask;
