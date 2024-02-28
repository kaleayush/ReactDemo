import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import storageService from "../appwrite/StorageService";

function PostCard({ $id, title, featuredImage }) {
  const [image, setImage] = useState();
  useEffect(() => {
    storageService.getFilePreview(featuredImage).then((result) => {
      setImage(result);
    });
  }, []);

  return (
    <>
      <Link to={`/Post/${$id}`}>
        <div className="w-full bg-white rounded-xl p-4">
          <div className="w-full justify-center p-4">
            <img src={image} alt={title} className="rounded-xl " />
          </div>
          <h2 className="text-xl font-bold">{title}</h2>
        </div>
      </Link>
    </>
  );
}

export default PostCard;
