import React, { useState } from "react";
import { FruitData } from "../Data/data";
import Forms from "./Forms";

const DataDisplay = () => {
  const [filteredData, setFilteredData] = useState(FruitData);

  const filterByName = (searchTerm) => {
    const filteredResult = FruitData.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(filteredResult);
  };
  return (
    <div className="container">
      <Forms filterByName={filterByName} />
      <div className="d-flex flex-row justify-content-between">
        <h1>name</h1>
        <h1>price</h1>
      </div>

      <div className="d-flex justify-content-center">
        <h1>Fruits</h1>
        <div>
          {filteredData.map((fruit) => {
            if (fruit.category === "Fruits") {
              return (
                <div className="d-flex flex-row justify-content-between mt-2">
                  <h1>{fruit.name}</h1>
                  <h1>{fruit.price}</h1>
                </div>
              );
            }
          })}
        </div>
      </div>

      <div className="d-flex justify-content-center">
        <h1>Vegetables</h1>
        <div>
          {FruitData.map((veg) => {
            if (veg.category === "Vegetables") {
              return (
                <div className="d-flex flex-row justify-content-between mt-2">
                  <h1>{veg.name}</h1>
                  <h1>{veg.price}</h1>
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default DataDisplay;
