import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; 
import Navigation from "./Navigation";
import axios from "axios"; 
import "./AllPosts.css";

const AllPosts = () => {
  const [posts, setPosts] = useState([]);
  const [pagination, setPagination] = useState({
    currentPage: 1,
    totalPages: 1,
    totalItems: 0,
  });
  const postsPerPage = 3;
  const navigate = useNavigate();


  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/postovi", {
          params: {
            page: pagination.currentPage,
            per_page: postsPerPage,
          },
          headers: {
            Authorization: "Bearer " + sessionStorage.getItem("auth_token"),
          },
        });

        setPosts(response.data.data); 

    
        setPagination({
          currentPage: response.data.meta.current_page,
          totalPages: response.data.meta.last_page,
          totalItems: response.data.meta.total,
        });
      } catch (error) {
        console.error("Greška pri učitavanju postova:", error);
      }
    };

    fetchPosts();
  }, [pagination.currentPage]); 

  const handleNextPage = () => {
    if (pagination.currentPage < pagination.totalPages) {
      setPagination((prev) => ({
        ...prev,
        currentPage: prev.currentPage + 1,
      }));
    }
  };

 
  const handlePrevPage = () => {
    if (pagination.currentPage > 1) {
      setPagination((prev) => ({
        ...prev,
        currentPage: prev.currentPage - 1,
      }));
    }
  };

  
  const handleReadMore = (postId) => {
    navigate(`/svi-postovi/${postId}`); 
  };

  return (
    <>
      <Navigation />
      <div className="all-posts-container">
        <h1 className="page-title">Svi Postovi</h1>
        <div className="posts-list">
          {posts.length > 0 ? (
            posts.map((post) => (
              <div className="post-card" key={post.id}>
                <h2 className="post-title">{post.naslov}</h2>
                <p className="post-author">Autor: {post.autor}</p>
                <p className="post-date">Datum: {post.datum_i_vreme}</p>
                <p className="post-content">{post.sadrzaj}</p>
                <button
                  className="read-more-button"
                  onClick={() => handleReadMore(post.id)}
                >
                  Pročitaj više
                </button>
              </div>
            ))
          ) : (
            <p>Nema postova za prikaz.</p>
          )}
        </div>

       
        <div className="pagination">
          <button
            onClick={handlePrevPage}
            disabled={pagination.currentPage === 1}
            className="pagination-button"
          >
            Prethodna
          </button>
          <span className="pagination-info">
            Stranica {pagination.currentPage} od {pagination.totalPages}
          </span>
          <button
            onClick={handleNextPage}
            disabled={pagination.currentPage === pagination.totalPages}
            className="pagination-button"
          >
            Sledeća
          </button>
        </div>
      </div>
    </>
  );
};

export default AllPosts;
