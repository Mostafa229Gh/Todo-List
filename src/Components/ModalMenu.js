import React, { useEffect, useRef } from "react";

function ModalMenu({ onClose }) {
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

  return (
    <div
      ref={modalRef}
      className="
        font-DoppioOne
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
        >
          Dark Mode
        </button>
        <button type="button" className="modalMenuItem bg-Persian-Rose">
          Donate ♡
        </button>
        <button type="button" className="modalMenuItem bg-Cherry">
          Delete
        </button>
      </div>
    </div>
  );
}

export default ModalMenu;
