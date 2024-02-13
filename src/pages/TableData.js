import React, { useState } from "react";
import TableForm from "./TableForm";
import { StudentData } from "../Data/data";
const TableData = () => {
  const [searched, setSearched] = useState(StudentData);

  const searchedFunction = (searchs) => {
    const filterSearch = StudentData.filter((student) =>
      student.first_name
        .toLocaleLowerCase()
        .includes(searchs.toLocaleLowerCase())
    );
    setSearched(filterSearch);
  };
  return (
    <div className="container">
      <TableForm searchedFunction={searchedFunction} />
      <div className="container">
        <div className="table">
          <div className="thead">
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Gender</th>
            </tr>
          </div>
          <div className="tbody">
            {searched.map((student) => {
              return (
                <tr key={student.id}>
                  <td>{student.first_name}</td>
                  <td>{student.last_name}</td>
                  <td>{student.email}</td>
                  <td>{student.gender}</td>
                </tr>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableData;
