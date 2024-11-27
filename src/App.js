import "./App.css";
import React, { useState } from "react";
import FirstShow from "./Components/FirstShow";
import NewTask from "./Components/NewTask";

function App() {
  const [addNew, setAddNew] = useState(false);

  return (
    <div className="App h-svh">
      <header className="flex justify-between p-6">
        <span className="font-Audiowide text-Charcoal-Blue sm:text-2xl">
          ToDo List
        </span>
        <svg
          className="sm:scale-125"
          width="24"
          height="24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className="stroke-Charcoal-Blue"
            d="M3.75 6.75H20.25M3.75 12H20.25M12 17.25H20.25"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </header>

      <FirstShow />
      {addNew && <NewTask />}
      <button
        className={`fixed bottom-0 right-0 mb-5
          transition-all duration-500 ease-ebol ${addNew ? "right-[calc(50%-30px)]  mr-0" : "mr-4"}`}
        onClick={() => setAddNew((prev) => !prev)}
      >
        <svg
          className={`fill-Gunmetal scale-125 drop-shadow-md sm:scale-150 
            transition-transform duration-500 ease-ebol ${
              addNew ? "rotate-45" : ""
            }`}
          width="60"
          height="60"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M26.5 1.87709C12.8967 1.87709 1.87709 12.8967 1.87709 26.5C1.87709 40.1033 12.8967 51.1229 26.5 51.1229C40.1033 51.1229 51.1229 40.1033 51.1229 26.5C51.1229 12.8967 40.1033 1.87709 26.5 1.87709ZM38.8115 30.199H30.199V38.8115H22.8121V30.199H14.1885V22.8121H22.8121V14.1885H30.199V22.8121H38.8115V30.199Z" />
        </svg>
      </button>
    </div>
  );
}

export default App;
