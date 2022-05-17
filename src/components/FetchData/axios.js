import React, { useState } from "react";
import axios from "axios";

const Axios = () => {
  const [show, setShow] = useState();
  const getDataHandler = async () => {
    await axios
      .get("https://reqres.in/api/users")
      .then((res) => setShow(JSON.stringify(res.data)))
      .catch((err) => console.log(err));
  };

  const sendDataHandler = () => {};

  return (
    <article className="p-10">
      <div className="flex justify-center items-center">
        <button className="btn green m-2" onClick={getDataHandler}>
          Get Data
        </button>
        <button className="btn yellow m-2" onClick={sendDataHandler}>
          Send Data
        </button>
      </div>
      <div>{show}</div>
    </article>
  );
};

export default Axios;
