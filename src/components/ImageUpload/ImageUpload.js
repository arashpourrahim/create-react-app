import axios from "axios";
import React, { useState } from "react";
import { Image } from "cloudinary-react";

// const baseURL = process.env.CLOUDINARY_URL;

const ImageUpload = () => {
  const [selectImage, setSelectImage] = useState([]);
  const [imageData, setImageData] = useState(null);
  const [loading, setLoading] = useState(false);

  const uploadImageHandler = () => {
    const formData = new FormData();
    formData.append("file", selectImage);
    formData.append("upload_preset", "UploadImage");

    const postImage = async () => {
      try {
        const response = await axios.post(
          "https://api.cloudinary.com/v1_1/webeshoma/image/upload",
          formData
        );
        console.log(response.data);
        setImageData(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    postImage();
  };

  return (
    <article className="text-center my-10">
      <div className="my-10">
        <input
          type="file"
          name="file"
          onChange={(e) => setSelectImage(e.target.files[0])}
        />
      </div>
      <div className="my-10">
        <button className="btn green" onClick={uploadImageHandler}>
          Upload
        </button>
      </div>
      <div>
        {loading ? (
          <h3>loading . . .</h3>
        ) : imageData ? (
          <img
            src={`https://res.cloudinary.com/webeshoma/image/upload/v1654975468/${imageData.public_id}`}
            alt="img"
          />
        ) : null}
      </div>
    </article>
  );
};

export default ImageUpload;
