import React, { useState } from "react";
import axios from "../../Constant/axiosInstance";

import GetMethods from "./GetMethods";
// import GetSumMethods from "./GetSumMethods";

// AXIOS GLOBALS
axios.defaults.headers.common["X-Auth-Token"] = "tokens";

const AxiosPage = () => {
  const [get, setGet] = useState(false);
  const [post, setPost] = useState(false);
  const [put, setPut] = useState(false);
  const [deleteEl, setDeleteEl] = useState(false);
  const [getSum, setGetSum] = useState(false);
  // const [transfer, setTransfer] = useState(false);

  // for get data
  const getHandler = () => {
    axios
      .get("/todos?_limit=20")
      .then((res) => setGet(res.data))
      .catch((err) => console.log(err));
  };

  // for add new data
  const postHandler = () => {
    axios
      .post("/todos", {
        title: "new todos",
        completed: true,
      })
      .then((res) => setPost(res))
      .catch((err) => console.log(err));
  };

  // for update data
  const putHandler = () => {
    axios
      .put("/todos/1")
      .then((res) => setPut(res))
      .catch((err) => console.log(err));
  };

  // for remove data
  const deleteElHandler = () => {
    axios
      .delete("/todos/1")
      .then((res) => setDeleteEl(res))
      .catch((err) => console.log(err));
  };

  // for all data from multiURL
  const getSumHandler = () => {
    axios
      .all([axios.get("/photos"), axios.get("/users")])
      .then(axios.spread((photos, users) => setGetSum(photos, users)))
      .catch((err) => console.log(err));

    console.log(getSum);
  };

  // for Intercepting request and response
  axios.interceptors.request.use(
    (config) => {
      console.log(
        `${config.method.toUpperCase()} request sent to ${
          config.url
        } at ${new Date().getTime()}`
      );
      return config;
    },
    (error) => {
      Promise.reject(error);
    }
  );

  // for custom header
  const customHeader = () => {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: "everyThing",
      },
    };
    axios
      .post(
        "/todos",
        {
          title: "new todos",
          completed: true,
        },
        config
      )
      .then((res) => setPost(res))
      .catch((err) => console.log(err));
  };

  // for transforming request and response

  // For Error Handling
  const errorHandling = () => {
    axios
      .get("/todos")
      .then((res) => setGet(res))
      .catch((err) => {
        if (err.response) {
          // out of range 200
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.config.headers);

          alert("Page not found");
        }
      });
  };

  // For Cancel Token
  const cancelToken = () => {
    const source = axios.CancelToken.source();

    axios
      .get("/todos", {
        cancelToken: source.token,
      })
      .then((res) => setGet(res.data))
      .catch((thrown) => {
        if (axios.isCancel(thrown)) {
          console.log("request cancel", thrown.message);
        }
      });
  };

  return (
    <article className="p-4">
      <section className="flex flex-row justify-center">
        <div className="m-2">
          <button className="btn green" onClick={getHandler}>
            GET
          </button>
        </div>
        <div className="m-2">
          <button className="btn yellow" onClick={postHandler}>
            POST
          </button>
        </div>
        <div className="m-2">
          <button className="btn blue" onClick={putHandler}>
            PUT/PATCH
          </button>
        </div>
        <div className="m-2">
          <button className="btn red" onClick={deleteElHandler}>
            DELETE
          </button>
        </div>
        <div className="m-2">
          <button className="btn black" onClick={getSumHandler}>
            SumData
          </button>
        </div>
        <div className="m-2">
          <button className="btn black" onClick={customHeader}>
            transferHandler
          </button>
        </div>
        <div className="m-2">
          <button className="btn black" onClick={errorHandling}>
            errorHandling
          </button>
        </div>
      </section>
      <hr />
      <section className="p-6">
        {get ? (
          <div>
            {get.map((getItems) => {
              return (
                <div key={getItems.id}>
                  <GetMethods getItems={getItems} />
                </div>
              );
            })}
          </div>
        ) : post ? (
          <div>{}</div>
        ) : put ? (
          <div>put</div>
        ) : deleteEl ? (
          <div>delete</div>
        ) : (
          <div></div>
        )}
        {getSum ? <div>feild...</div> : null}
      </section>
    </article>
  );
};

export default AxiosPage;
