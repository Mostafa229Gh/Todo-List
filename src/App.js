import "./App.css";
import React, { useState, useEffect } from "react";
import FirstShow from "./Components/FirstShow";
import NewTask from "./Components/NewTask";
import ModalMenu from "./Components/ModalMenu";
import TaskList from "./Components/TaskList";

function App() {
  const [addNew, setAddNew] = useState(false);
  const [showModalMenu, setShowModalMenu] = useState(false);
  const [hasTasks, setHasTasks] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
      ? true
      : false;
  });
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  // check local storage is empty
  const checkLocalStorage = () => {
    const tasks = JSON.parse(localStorage.getItem("tasks"));
    if (!tasks || tasks.length === 0) {
      return false;
    }
    return true;
  };
  useEffect(() => {
    const tasksExist = checkLocalStorage();
    setHasTasks(tasksExist);
  }, []);
  const handleTaskUpdated = () => {
    const tasksExist = checkLocalStorage();
    setHasTasks(tasksExist);
  };

  const handleCloseNewTask = () => {
    setAddNew(false);
  };

  return (
    <div className="App h-full">
      <header className="flex justify-between p-6">
        <span className="font-Audiowide text-Charcoal-Blue sm:text-2xl dark:text-Pale-Mint">
          ToDo List
        </span>
        {/* Menu Icon */}
        <svg
          onClick={() => setShowModalMenu(true)}
          className={`cursor-pointer sm:scale-125 ${
            showModalMenu ? "hidden" : "block"
          } `}
          width="24"
          height="24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className="stroke-Charcoal-Blue dark:stroke-Pale-Mint"
            d="M3.75 6.75H20.25M3.75 12H20.25M12 17.25H20.25"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        {showModalMenu && (
          <ModalMenu
            onClose={() => setShowModalMenu(false)}
            onTaskRemove={handleTaskUpdated}
            darkMode={darkMode}
            toggleDarkMode={() => setDarkMode(!darkMode)}
          />
        )}
      </header>

      {!addNew && !hasTasks && <FirstShow />}
      {addNew && (
        <NewTask onClose={handleCloseNewTask} onTaskAdded={handleTaskUpdated} />
      )}
      {!addNew && hasTasks && <TaskList onTaskRemove={handleTaskUpdated} />}

      {/* Plus Button */}
      <button
        className={`fixed bottom-0 right-0 mb-5
          transition-all duration-500 ease-ebol ${
            addNew ? "right-[calc(50%-30px)]  mr-0" : "mr-4"
          }`}
        onClick={() => {
          setShowModalMenu(false);
          setAddNew((prev) => !prev);
        }}
      >
        <svg
          className={` scale-125 drop-shadow-md sm:scale-150 
            transition-transform duration-500 ease-ebol ${
              addNew ? "rotate-45" : ""
            }`}
          width="53"
          height="53"
          viewBox="0 0 53 53"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polygon
            className="fill-Pale-Mint dark:fill-Slate-Gray"
            points="38.8,22.8 38.8,30.2 30.2,30.2 30.2,38.8 22.8,38.8 22.8,30.2 14.2,30.2 14.2,22.8 22.8,22.8 
	22.8,14.2 30.2,14.2 30.2,22.8 "
          />
          <path
            className="fill-Gunmetal dark:fill-Pale-Mint"
            d="M26.5 1.87709C12.8967 1.87709 1.87709 12.8967 1.87709 26.5C1.87709 40.1033 12.8967 51.1229 26.5 51.1229C40.1033 51.1229 51.1229 40.1033 51.1229 26.5C51.1229 12.8967 40.1033 1.87709 26.5 1.87709ZM38.8115 30.199H30.199V38.8115H22.8121V30.199H14.1885V22.8121H22.8121V14.1885H30.199V22.8121H38.8115V30.199Z"
          />
        </svg>
      </button>

      <footer className="w-full h-32"></footer>
    </div>
  );
}

export default App;
