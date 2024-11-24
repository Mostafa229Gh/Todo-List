import "./App.css";
import React from "react";

function App() {
  return (
    <div className="App h-svh">
      <header className="flex justify-between p-6">
        <span className="font-Audiowide text-Charcoal-Blue sm:text-2xl" >ToDo List</span>
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

      <div className="flex flex-col items-center justify-center mt-44">
        <svg
          width="147"
          height="147"
          class="fill-Gunmetal"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M95.8 49.28V67.42H80.68V54.24C78.38 54.58 76.02 54.76 73.64 54.76C71.34 54.76 69.06 54.6 66.84 54.28V84.48C66.84 88.3 69.94 91.4 73.76 91.4C77.58 91.4 80.68 88.3 80.68 84.48V79.44H95.8V138.06C103.44 138.06 109.64 131.86 109.64 124.22V38.28C105.78 42.76 101.08 46.5 95.8 49.28Z" />
          <path d="M105.6 12.86C103.1 10.36 99.64 8.8 95.8 8.8H80.68H66.84H51.44C43.8 8.8 37.6 15 37.6 22.64V24.18V27.8C40.98 33.66 45.74 38.62 51.44 42.22V24.18H66.82V48.08C69.04 48.44 71.3 48.64 73.62 48.64C76.02 48.64 78.38 48.44 80.66 48.04V24.18H95.78V42.22C101.48 38.62 106.26 33.66 109.62 27.8V24.18V22.64C109.64 18.82 108.1 15.36 105.6 12.86Z" />
          <path d="M74.1 102.18H73.44H65.14C62.08 102.18 59.58 104.66 59.58 107.74V124.18H51.44V49.28C46.16 46.5 41.48 42.76 37.6 38.3V124.18C37.6 131.82 43.8 138.02 51.44 138.02H59.58C67.22 138.02 73.42 131.82 73.42 124.18V116.04H74.22C77.06 116.04 79.36 113.74 79.36 110.9V107.46C79.38 104.54 77.02 102.18 74.1 102.18Z" />
        </svg>
        <p className="font-Anta text-3xl text-center px-11 mt-11 sm:p-0">
          Turn Your To-Dos into Dones
        </p>
      </div>

      <button className="fixed bottom-0 left-0 right-0 flex justify-end mr-4 mb-5">
        <svg
          className="fill-Gunmetal sm:scale-125"
          width="53"
          height="53"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M26.5 1.87709C12.8967 1.87709 1.87709 12.8967 1.87709 26.5C1.87709 40.1033 12.8967 51.1229 26.5 51.1229C40.1033 51.1229 51.1229 40.1033 51.1229 26.5C51.1229 12.8967 40.1033 1.87709 26.5 1.87709ZM38.8115 30.199H30.199V38.8115H22.8121V30.199H14.1885V22.8121H22.8121V14.1885H30.199V22.8121H38.8115V30.199Z" />
        </svg>
      </button>
    </div>
  );
}

export default App;
