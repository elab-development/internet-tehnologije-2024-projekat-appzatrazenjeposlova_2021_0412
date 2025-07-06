import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "./Navigation";
import AdsList from "./AdsList";
import "./MyAds.css";

const MyAds = () => {
  const [ads, setAds] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const techSolutionsAds = AdsList.filter(ad => ad.company === "Tech Solutions");
    setAds(techSolutionsAds);
  }, []);

  const handleAdClick = (ad) => {
    navigate(`/all-ads/${ad.id}`, { state: { ad } });
  };

  return (
    <>
      <Navigation />
      <div className="my-ads-container">
        <h1 className="page-title">Naši Oglasi</h1>
        <div className="ads-list">
          {ads.map((ad) => (
            <div
              className="ad-card"
              key={ad.id}
              onClick={() => handleAdClick(ad)}
              style={{ cursor: "pointer" }}
            >
              <div className={`ad-type ${ad.category === "Posao" ? "job" : "internship"}`}>
                {ad.category}
              </div>
              <h2 className="ad-title">{ad.title}</h2>
              <p className="ad-company">{ad.company}</p>
              <p className="ad-location">{ad.location}</p>
              <p className="ad-description">{ad.description}</p>
              
              <button className="delete-button">Obriši</button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MyAds;
