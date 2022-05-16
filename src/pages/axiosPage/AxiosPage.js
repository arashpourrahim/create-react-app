import React, { useState } from "react";

const AxiosPage = () => {
  const [get, setGet] = useState(false);
  const [post, setPost] = useState(false);
  const [put, setPut] = useState(false);
  const [deleteEl, setDeleteEl] = useState(false);

  const getHandler = () => {
    setGet(true);
    console.log("get");
  };

  const postHandler = () => {
    setPost(true);
    console.log("post");
  };

  const putHandler = () => {
    setPut(true);
    console.log("put");
  };

  const deleteElHandler = () => {
    setDeleteEl(true);
    console.log("delete");
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
      </section>
      <hr />
      <section className="p-6">
        {get ? (
          <div>get</div>
        ) : post ? (
          <div>post</div>
        ) : put ? (
          <div>put</div>
        ) : deleteEl ? (
          <div>delete</div>
        ) : (
          <div></div>
        )}
      </section>
    </article>
  );
};

export default AxiosPage;
