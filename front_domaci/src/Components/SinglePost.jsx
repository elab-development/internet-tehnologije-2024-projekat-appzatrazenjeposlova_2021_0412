import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navigation from "./Navigation";
import "./SinglePost.css";

const SinglePost = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  
  const userRole = sessionStorage.getItem("userRole");

  if (!state || !state.post) {
    return <p>Post nije pronađen.</p>;
  }
  const post = state.post;

  const handleDeletePost = () => {

    alert(`Post sa ID-jem ${post.id} je obrisan.`);
    navigate("/svi-postovi");
  };

  return (
    <>
      <Navigation />
      <div className="single-post-container">
        <h1 className="post-title">{post.title}</h1>
        <p className="post-author">Autor: {post.author}</p>
        <p className="post-date">Datum: {post.date}</p>
        <p className="post-content">{post.content}</p>
        {["alumni", "admin"].includes(userRole) && (
          <button className="delete-post-button" onClick={handleDeletePost}>
            Obriši Post
          </button>
        )}
      </div>
    </>
  );
};

export default SinglePost;
