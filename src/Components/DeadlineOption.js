import React, { useState } from "react";

function DeadlineOption() {
  const [dateTime, setDateTime] = useState("");

  const handleChange = (event) => {
    setDateTime(event.target.value);
  };
  console.log(dateTime);

  return (
    <div className="flex flex-col items-center pt-8">
      <label htmlFor="datetime" className="text-sm">
        Select Date and Time:
      </label>
      <input
        type="datetime-local"
        id="datetime"
        value={dateTime}
        onChange={handleChange}
        className="p-2 border border-Pale-Mint rounded-lg"
      />
    </div>
  );
}

export default DeadlineOption;
