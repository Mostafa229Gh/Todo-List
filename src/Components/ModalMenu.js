import React, { useEffect, useRef, useState } from "react";

function ModalMenu({ onClose, onTaskRemove, darkMode, toggleDarkMode }) {
  const [isDonate, setIsDonate] = useState(false);
  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  const handleDeleteClick = () => {
    const isConfirmed = window.confirm(
      "Are you sure you want to delete all tasks?"
    );
    if (isConfirmed) {
      localStorage.removeItem("tasks");

      if (onTaskRemove) {
        onTaskRemove();
      }

      onClose();
    }
  };

  return (
    <div ref={modalRef} className="font-DoppioOne">
      <div
        className="
          absolute right-6 
          p-2 pb-4 
          w-36 rounded-xl shadow-form 
          bg-Steel-Blue opacity-95 z-10"
      >
        <div dir="rtl" className="mb-3">
          <svg
            onClick={onClose}
            className="stroke-Pale-Mint cursor-pointer"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 18L18 6M6 6L18 18"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div className="flex flex-col gap-[10px]">
          <button
            type="button"
            className="modalMenuItem border-solid border-1 border-Pale-Mint"
            onClick={toggleDarkMode}
          >
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>

          <button
            type="button"
            className="modalMenuItem bg-Persian-Rose"
            onClick={() => {
              setIsDonate((perv) => !perv);
            }}
          >
            Donate ♡
          </button>

          <button
            type="button"
            className="modalMenuItem bg-Cherry"
            onClick={handleDeleteClick}
          >
            Delete All
          </button>
        </div>
      </div>
      {isDonate && (
        <div
          className="z-10 fixed inset-0 bg-black bg-opacity-10 backdrop-blur-sm flex justify-center items-center"
          onClick={() => {
            setIsDonate(false);
            onClose();
          }}
        >
          <div
            className="
              flex flex-col gap-3
              w-4/5
              h-3/5 sm:h-2/5
              p-4
              rounded-xl
              text-Charcoal-Blue dark:text-Pale-Mint
              bg-Ivory-Cream dark:bg-Deep-Steel
              shadow-donate dark:shadow-donateDark
              fixed top-1/2 left-1/2 -translate-x-1/2 
              -translate-y-1/2 sm:-translate-y-[55%]"
          >
            <h1 className="text-lg sm:text-3xl">Your Support Is a Great Encouragement!</h1>
            <p className="font-Roboto text-xs sm:text-base leading-5 text-justify px-2">
              I’m truly grateful that you’re considering supporting this
              project! This app has been built with passion and dedication to
              provide you with a better and more practical experience. At the
              moment, the Donate section isn’t ready yet, but in the near
              future, you’ll have the opportunity to contribute to the
              development and improvement of this project. Your support, whether
              through valuable feedback or financial contributions, gives me the
              motivation to continue this journey with even more determination.
              If you’d like to stay in touch, share your thoughts, or simply
              have a chat, I’d be happy to connect with you on LinkedIn.
            </p>
            <a className="my-3 sm:w-44" href="https://www.linkedin.com/in/mostafa229gh/">
              <button type="button" className="modalMenuItem bg-LinkedIn-Blue shadow-form ">
                Connect on LinkedIn
              </button>
            </a>
            <p className="font-Roboto text-xs sm:text-base leading-5 text-justify">
              Thank you for being here and supporting this project.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default ModalMenu;
