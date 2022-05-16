import React from "react";

const GetMethods = ({ getItems }) => {
  return (
    <div>
      {getItems.id} : {getItems.title}
    </div>
  );
};

export default GetMethods;
