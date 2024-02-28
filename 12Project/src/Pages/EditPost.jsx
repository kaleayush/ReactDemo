import React, { useEffect, useState } from "react";
import { Container, PostForm } from "../Components/index";
import databaseService from "../appwrite/DatabaseService";
import storageService from "../appwrite/StorageService";
import { useNavigate, useParams } from "react-router-dom";
import { set } from "react-hook-form";

function EditPost() {
  const [post, setPost] = useState(null);
  const { slug } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    if (slug) {
      databaseService.getPostById(slug).then((post) => {
        if (post) setPost(post);
      });
    } else {
      navigate("/");
    }
  }, [slug, navigate]);
  return post ? (
    <div className="py-8">
      <PostForm post={post} />
    </div>
  ) : null;
}

export default EditPost;
