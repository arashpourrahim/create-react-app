import React, { useState, useEffect } from "react";
import axios from "axios";

const LoadData = () => {
  const [posts, setPosts] = useState([]);

  const baseURL = "https://jsonplaceholder.typicode.com/posts";

  useEffect(() => {
    const getPosts = async () => {
      const getData = await axios.get(baseURL);
      const resData = await getData.data;
      setPosts(resData);
    };

    getPosts();
  }, []);

  const newPostHandler = async () => {
    const newPost = {
      id: `${posts.length + 1}`,
      title: "my new post",
      body: "new",
    };
    await axios.post(baseURL, newPost);
    setPosts([...posts, newPost]);
  };

  const updateHandler = async (p) => {
    p.title = "title is updated";
    await axios.put(`${baseURL}/${p.id}`);
    const postsClone = [...posts];
    const index = postsClone.indexOf(p);
    postsClone[index] = { ...p };
    setPosts(postsClone);
  };

  const deleteHandler = async (p) => {
    await axios.delete(`${baseURL}/${p.id}${p}`);
    setPosts(posts.filter((items) => items.id !== p.id));
  };

  return (
    <div className="container-xl">
      <div className="p-10">
        <h1 className="text-2xl font-bold">
          This table is {posts.length} Posts
        </h1>
      </div>
      <div className="p-10">
        <button className="btn green" onClick={newPostHandler}>
          Add New Post
        </button>
      </div>
      <div className="w-100 my-6 p-10">
        <table className="table-auto w-full">
          <thead className="w-full">
            <tr className="text-left">
              <th>Posts List</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody className="w-full">
            {posts.map((p) => {
              return (
                <tr key={p.id} className="w-full my-2 p-2">
                  <td>
                    {p.id} - {p.title}
                  </td>
                  <td>
                    <button
                      onClick={() => updateHandler(p)}
                      className="btn yellow my-2"
                    >
                      Update
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => deleteHandler(p)}
                      className="btn red my-2"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LoadData;
