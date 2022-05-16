import React from "react";

const GetSumMethods = (props) => {
  const { url, name, website } = props;
  return (
    <div>
      <img src={url} alt="imag" />
      <p>{name}</p>
      <p>{website}</p>
    </div>
  );
};

export default GetSumMethods;
