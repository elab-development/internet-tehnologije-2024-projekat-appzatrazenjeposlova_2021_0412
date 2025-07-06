import React from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "./Navigation";
import "./AllPosts.css";
import posts from "./PostList";
import usePaginate from "./usePaginate";

const AllPosts = () => {
  const navigate = useNavigate();
  const postsPerPage = 6;

  const { currentItems: currentPosts, currentPage, totalPages, paginate } = usePaginate(posts, postsPerPage);

  const handleReadMore = (post) => {
    navigate(`/svi-postovi/${post.id}`, { state: { post } });
  };

  const getShortContent = (content, length = 100) => {
    return content.length > length ? content.substring(0, length) + "..." : content;
  };

  return (
    <>
      <Navigation />
      <div className="all-posts-container">
        <h1 className="page-title">Svi Postovi</h1>
        <div className="posts-list">
          {currentPosts.map((post) => (
            <div className="post-card" key={post.id}>
              <h2 className="post-title">{post.title}</h2>
              <p className="post-author">Autor: {post.author}</p>
              <p className="post-date">Datum: {post.date}</p>
              <p className="post-content">{getShortContent(post.content)}</p>
              <button className="read-more-button" onClick={() => handleReadMore(post)}>
                Pročitaj više
              </button>
            </div>
          ))}
        </div>
        <div className="pagination">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              className={`page-button ${currentPage === index + 1 ? "active" : ""}`}
              onClick={() => paginate(index + 1)}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default AllPosts;
