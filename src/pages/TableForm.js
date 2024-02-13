import React, { useState } from "react";

const TableForm = ({ searchedFunction }) => {
  const [inputTracker, setInputTracker] = useState("");

  const handleChange = (event) => {
    setInputTracker(event.target.value);
    searchedFunction(event.target.value);
  };
  return (
    <div className="container">
      <input
        className="form-control"
        type="text"
        placeholder="search in here"
        value={inputTracker}
        onChange={handleChange}
      />
    </div>
  );
};

export default TableForm;
