import React from "react";

const sendHTTPRequest = (method, url, data) => {
  return fetch(url, {
    method: method,
    body: JSON.stringify(data),
    headers: data ? { "Content-Type": "application/json" } : {},
  }).then((res) => res.json());
};

const Fetch = () => {
  const getDataHandler = () => {
    sendHTTPRequest("Get", "baseURL/endPoint")
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  const sendDataHandler = () => {
    sendHTTPRequest("POST", "baseURL/endPoint", {
      email: "email",
      password: "password",
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

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
      <div></div>
    </article>
  );
};

export default Fetch;
