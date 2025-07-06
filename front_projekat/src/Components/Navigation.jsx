import React, { useState, useEffect } from "react";
import "./Navigation.css";

const Navigation = () => {
  
  const [userRole, setUserRole] = useState("admin"); 

  useEffect(() => {
    
    const storedRole = sessionStorage.getItem("role");
    if (storedRole) {
      setUserRole(storedRole);
    }
  }, []);

  
  const renderNavigationLinks = () => {
    switch (userRole) {
      case "admin":
        return (
          <>
            <li><a href="/all-ads">Svi Oglasi</a></li>
            <li><a href="/kompanije">Kompanije</a></li>
            <li><a href="/categories">Kategorije</a></li>
            <li><a href="/students">Studenti</a></li>
            <li><a href="/svi-postovi">Svi Postovi</a></li>
          </>
        );
      case "company":
        return (
          <>
            <li><a href="/account">Naš Profil</a></li>
            <li><a href="/nasi-oglasi">Naši Oglasi</a></li>
            <li><a href="/dodaj-oglas">Dodaj Oglas</a></li>
            <li><a href="/svi-postovi">Svi Postovi</a></li>
          </>
        );
      case "student":
        return (
          <>
            <li><a href="/all-ads">Svi Oglasi</a></li>
            <li><a href="/moje-prijave">Moje Prijave</a></li>
            <li><a href="/kompanije">Kompanije</a></li>
            <li><a href="/svi-postovi">Svi Postovi</a></li>
            <li><a href="/public-api">Ponude u inostranstvu</a></li>
            
          </>
        );
      case "alumni":
        return (
          <>
            <li><a href="/all-ads">Svi Oglasi</a></li>
            <li><a href="/kompanije">Kompanije</a></li>
            <li><a href="/svi-postovi">Svi Postovi</a></li>
            <li><a href="/napisi-post">Napiši Post</a></li>
          </>
        );
      default:
        return null; 
    }
  };

 
  const handleLogout = () => {
    sessionStorage.removeItem("userRole"); 
    window.location.href = "/"; 
  };

  return (
    <nav className="navigation">
      <div className="nav-container">
        <h1 className="nav-logo">JobFinder</h1>
        <ul className="nav-links">
          {renderNavigationLinks()}
        </ul>
        <button className="logout-button" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
