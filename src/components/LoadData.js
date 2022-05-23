import React, { useState, useEffect } from "react";
// import axios from "axios";

const LoadData = () => {
  const [userData, setUserData] = useState([]);

  //   useEffect(() => {
  //     fetch("https://jsonplaceholder.typicode.com/users")
  //       .then((res) => res.json())
  //       .then((data) => setUserData(data))
  //       .catch((err) => console.log(err));
  //   }, []);

  useEffect(() => {
    responseUser();
  }, []);

  const responseUser = async () => {
    const api = `https://jsonplaceholder.typicode.com/users`;
    const getData = await fetch(api);
    const result = await getData.json();
    setUserData(result);
  };

  const fetchHandler = () => {};

  return (
    <div>
      <div>
        <button onClick={fetchHandler}>fetch</button>
      </div>
      {userData.map((items) => {
        return <div key={items.id}>{items.name}</div>;
      })}
    </div>
  );
};

export default LoadData;
