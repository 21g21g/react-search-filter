import React, { useState } from "react";

const Forms = ({ filterByName }) => {
  const [input, setInput] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const handleCheckedbox = (event) => {
    setIsChecked(event.target.checked);
  };
  const handleChange = (event) => {
    setInput(event.target.value);
    filterByName(event.target.value);
  };
  return (
    <div className="container d-flex flex-column">
      <form>
        <input
          className="form-control"
          type="text"
          placeholder="Search here..."
          name="input"
          onChange={handleChange}
          value={input}
        />
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckedbox}
        />
        <span>only show products in shock</span>
      </form>
    </div>
  );
};

export default Forms;
