import React, { useState } from "react";

const AxiosPage = () => {
  const [get, setGet] = useState(false);
  const [post, setPost] = useState(false);
  const [put, setPut] = useState(false);
  const [deleteEl, setDeleteEl] = useState(false);

  return (
    <article className="p-4">
      <section className="flex flex-row justify-center">
        <div className="m-2">
          <button className="btn green" onClick={() => setGet(true)}>
            GET
          </button>
        </div>
        <div className="m-2">
          <button className="btn yellow" onClick={() => setPost(true)}>
            POST
          </button>
        </div>
        <div className="m-2">
          <button className="btn blue" onClick={() => setPut(true)}>
            PUT/PATCH
          </button>
        </div>
        <div className="m-2">
          <button className="btn red" onClick={() => setDeleteEl(true)}>
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
