import React, { useState, useEffect, useRef } from "react";

function TaskList({ onTaskRemove }) {
  const [isTruncated, setIsTruncated] = useState({});
  const [tasks, setTasks] = useState([]);
  const taskRefs = useRef([]);

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(savedTasks);

    const initialTruncatedState = {};
    savedTasks.forEach((_, index) => {
      initialTruncatedState[index] = true;
    });
    setIsTruncated(initialTruncatedState);
  }, []);

  const handleToggle = (index) => {
    setIsTruncated((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      taskRefs.current.forEach((ref, index) => {
        if (ref && !ref.contains(event.target) && !isTruncated[index]) {
          setIsTruncated((prevState) => ({
            ...prevState,
            [index]: true,
          }));
        }
      });
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isTruncated]);

  const handleDelete = (index) => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      const updatedTasks = tasks.filter((_, i) => i !== index);
      localStorage.setItem("tasks", JSON.stringify(updatedTasks));
      setTasks(updatedTasks);
      if (onTaskRemove) {
        onTaskRemove();
      }
      handleToggle(index);
    }
  };

  return (
    <div className="flex flex-col">

      <div className="grid sm:grid-cols-3 gap-3 px-9 self-center">

        {tasks.map((task, index) => {
          const isPriority = task.priority;
          const fullText = task.description;
          const truncatedText =
            fullText.split(" ").slice(0, 7).join(" ") + "...";

          const dateObject = new Date(task.dateTime);
          const date = dateObject.toLocaleDateString("en-US", {
            day: "2-digit",
            month: "short",
          });
          const time = dateObject.toTimeString().slice(0, 5);

          return (
            <div
              ref={(el) => (taskRefs.current[index] = el)}
              style={{ backgroundColor: task.color }}
              className={`
                  key=${index}
                  flex flex-col justify-between
                  w-80 sm:w-96
                  rounded-xl
                  ${isPriority ? "text-Gunmetal" : "text-white"}
                  p-2 duration-500 ease-ebol
                  ${isTruncated[index] ? "h-20 sm:h-28" : "h-44 sm:h-52"}
                `}
            >
              <div
                className="flex justify-between h-full cursor-pointer"
                onClick={() => handleToggle(index)}
              >
                <div className={`${isPriority ? "" : "w-56 sm:w-72"}`}>
                  <h1 className="font-DoppioOne sm:text-lg">{task.title}</h1>
                  <p
                    className={`px-1 mt-1 font-Roboto text-justify text-xs sm:text-sm ${
                      isTruncated[index] ? "animate-fadeOut" : "animate-none"
                    }`}
                  >
                    {isTruncated[index] ? truncatedText : fullText}
                  </p>
                </div>

                {!isPriority && (
                  <div className="w-24 h-full flex flex-col justify-center items-center font-LexendDeca font-black text-lg">
                    <h2>{date}</h2>
                    <h2>{time}</h2>
                  </div>
                )}
              </div>
              <div
                className={`flex flex-row justify-between text-xs sm:text-base ${
                  isTruncated[index] ? "hidden" : "block animate-fadeOut"
                } `}
              >

                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="Done"
                    value="Done"
                    className="form-checkbox"
                  />
                  <span className="ml-1 cursor-pointer text-xs sm:text-base">
                    Done
                  </span>
                </label>

                <div className="flex flex-row gap-8 scale-[0.85]">

                  <button className="w-6 h-7">
                    <svg
                      className={`${
                        isPriority ? "fill-Gunmetal" : "fill-white"
                      }`}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 967.4 967.5"
                    >
                      <path
                        d="M791.8,595.6v228.2c0,79.2-64.5,143.7-143.7,143.7H143.7C64.5,967.5,0,903,0,823.8V319.4c0-79.2,64.4-143.7,143.7-143.7h228.2
    c19.6,0,35.6,16,35.6,35.6s-16,35.6-35.6,35.6H143.7c-39.9,0-72.5,32.6-72.5,72.5v504.4c0,39.9,32.6,72.5,72.5,72.5h504.4
    c39.9,0,72.5-32.6,72.5-72.5V595.6c0-19.6,16-35.6,35.6-35.6s35.6,16,35.6,35.6z"
                      />
                      <path
                        d="M929.5,37.9c-50.5-50.5-132.5-50.5-183,0L236.5,548c-30,30-52.1,67.1-64.2,107.7l-38.4,129c-6.2,20.8,5.6,42.7,26.5,48.9
    c3.6,1.1,7.4,1.6,11.2,1.6c3.8,0,7.6-0.6,11.2-1.6l129-38.4c40.6-12.1,77.7-34.1,107.7-64.2l510-510.1c50.5-50.5,50.5-132.5,0-183z
    M370.4,682c-21.9,21.9-48.9,37.9-78.5,46.8l-75.8,22.6l22.6-75.8c8.9-29.6,24.9-56.6,46.8-78.5l407.9-407.8l84.9,85L370.4,682z
    M880.5,171.9l-59.8,59.8l-85-85l59.9-59.9c23.3-23.7,61.3-24,84.9-0.7c23.7,23.3,24,61.3,0.7,84.9z"
                      />
                    </svg>
                  </button>

                  <button
                    className="w-6 h-7"
                    onClick={() => handleDelete(index)}
                  >
                    <svg
                      className={`${
                        isPriority ? "fill-Gunmetal" : "fill-white"
                      }`}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 1080 1080"
                    >
                      <path
                        d="M890.8,424.4l-34.4,452.4c-2.5,32.5-17,62.5-40.9,84.7c-23.9,22.2-55,34.4-87.6,34.4H357.3
  c-32.6,0-63.7-12.2-87.6-34.3c-23.9-22.1-38.4-52.2-40.9-84.7l-34.4-452.4c-1.7-23.4,15.9-43.9,39.3-45.7
  c23.4-1.7,43.9,15.9,45.8,39.3l33.4,439.7c2.2,29.7,27.2,52.9,57,52.9h345.3c29.7,0,54.8-23.2,57-52.9L805.6,418
  c0.8-11.3,6-21.7,14.7-29.1s19.7-11.1,31.1-10.2C874.8,380.5,892.5,401,890.8,424.4z"
                      />
                      <path
                        d="M888.5,229.4H743.8l-16.4-72.8c-4.7-20.5-16.3-39-32.7-52.1c-16.4-13.1-37-20.4-58-20.4H444.3
  c-21,0-41.6,7.2-58.1,20.4c-16.4,13.1-28,31.6-32.6,52l-0.4,1.8l-16,71.1H191.6c-22.3,0-41.1,19.8-41.1,43.2
  c0,23.8,18.4,43.2,41.1,43.2h696.9c22.7,0,41.1-19.4,41.1-43.2C929.6,248.8,911.2,229.4,888.5,229.4z M417.9,239.4l13-57.5
  c2.8-12.5,14-21.4,26.8-21.4h165.5c12.8,0,24,8.9,26.8,21.4l13,57.5H417.9z"
                      />
                    </svg>
                  </button>

                  {isPriority && (
                    <button className="w-6 h-7">
                      <svg
                        className="fill-Gunmetal"
                        viewBox="0 0 1600 1600"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          transform="translate(1067,78)"
                          d="m0 0h19l15 4 13 7 9 7 10 9 8 7 55 55v2l4 2v2l4 2v2l4 2 4 4v2l4 2v2l4 2v2l4 2v2l4 2 80 80v2l4 2v2l4 2v2l4 2v2l4 2v2l4 2v2l4 2 6 7 6 5 5 6 7 6 5 6 7 6 6 7 44 44 6 5v2l4 2 20 20v2l4 2v2l4 2v2l4 2v2l4 2v2l4 2v2l4 2 8 8v2l4 2 7 8 9 9 12 16 7 14 2 7 1 11-2 16-5 13-9 14-14 15-10 9-19 14-25 15-27 13-24 9-28 8-26 5-33 4-13 1-39 1-7 13-10 15-16 27-22 36-10 15-13 22-14 22-11 18-12 19-7 11-6 10-2 5v12l5 31 2 20 1 36v19l-4 41-6 41-6 28-9 31-8 22-11 27-14 29-10 17-10 16-13 19-13 16-9 11-9 10-1 2h-2l-2 4-13 13-10 7-10 5-17 5h-17l-12-3-15-8-15-13-7-7-8-7-190-190-3-2v-2l-4-2-12-13-23-23-5-3-6 2-44 44-13 14-8 7-8 9-8 7-8 9-8 7-10 11h-2v2l-18 18h-2l-2 4-74 74-5 4-7 8-6 6h-2l-2 4-10 10-5 4-7 8-10 9-6 7-8 7-8 9-8 7-10 11h-2v2l-45 45-8 7-17 17-8 7-13 10-12 9-15 10-25 13-14 7-28 12-36 14-38 15-6 2 2-6 8-14 8-21 11-26 6-16 13-31 8-17 12-20 12-17 8-10 11-13 15-16 263-263 1-2h2l2-4h2l2-4h2l2-4 60-60 8-7 15-13 3-3-2-4-125-125-7-8-113-113-9-11-11-15-4-8-4-13-1-10 4-16 5-12 6-9 8-10 15-15 11-9 14-12 12-9 18-13 20-12 17-10 15-8 29-13 25-9 22-7 28-7 41-7 25-3 13-1h71l35 4 18 3h11l20-11 16-10 28-17 17-11 46-28 38-24 26-15 17-10 5-6v-46l3-31 5-27 5-19 10-30 11-24 10-19 12-19 9-12 13-15 15-15 14-9 13-5zm21 174-3 7-10 31-5 22-2 18v19l3 29v24l-3 12-5 10-7 9-9 10-13 9-29 17-16 10-47 29-39 24-48 30-20 12-14 9-20 12-16 9-20 9-6 2h-13l-13-4-22-5-25-3-16-1h-38l-29 3-26 5-28 8-20 7-23 10-19 9-23 13-21 12-2 2 7 9 8 7 20 20 8 7 107 107 7 8h2v2l4 4h2l2 4 6 6h2l2 4h2l2 4 8 8h2l2 4h2v2h2v2h2l2 4h2v2l8 7 252 252 5 4 7 8 13 12 4-4 12-21 7-12 10-21 14-34 12-39 5-25 3-22 1-12v-49l-3-22-9-41v-14l2-8 9-21 9-15 8-13 14-22 10-16 17-28 13-21 10-16 11-18 8-13 14-23 15-24 9-15 6-9 7-12 8-11 9-11v-2l4-2 13-9 8-3 6-1h32l15 1h29l22-3 23-6 27-9 3-2-1-4-11-12-231-231-6-7-6-4z"
                        />
                      </svg>
                    </button>
                  )}
                </div>
              </div>
            </div>
          );
        })}

      </div>
      <span className="w-85 sm:w-4/5 h-0 rounded-sm my-5 border-1 border-solid border-Gunmetal self-center"></span>

      <div className="grid sm:grid-cols-3 gap-3 px-9 self-center">

      </div>
    </div>
  );
}

export default TaskList;
