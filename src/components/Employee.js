import React from "react";

const Employee = ({ firstName, lastName }) => {
  return (
    <div>
      <h1>
        Employee Name is: {firstName} {lastName}
      </h1>
    </div>
  );
};

export default Employee;
