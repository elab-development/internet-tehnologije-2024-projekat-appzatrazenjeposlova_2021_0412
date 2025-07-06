import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "./Navigation";
import AdsList from "./AdsList";
import "./AllAds.css";
import usePaginate from "./usePaginate";

const AllAds = () => {
  const [ads, setAds] = useState([]);
  const [categories, setCategories] = useState([]);
  const [types, setTypes] = useState([]);
  const [filteredAds, setFilteredAds] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedType, setSelectedType] = useState(null);
  const navigate = useNavigate();
  const adsPerPage = 6;

  useEffect(() => {
    setAds(AdsList);
    setFilteredAds(AdsList);
    setCategories([
      { id: 1, name: "Posao" },
      { id: 2, name: "Praksa" },
    ]);
    setTypes([
      { id: 1, name: "Front-end" },
      { id: 2, name: "Back-end" },
      { id: 3, name: "Full-stack" },
      { id: 4, name: "IT Support" },
      { id: 5, name: "Mobile Development" },
      { id: 6, name: "Data Science" },
      { id: 7, name: "Java Developer" },
      { id: 8, name: "UX/UI Design" },
    ]);
  }, []);

  useEffect(() => {
    let filtered = ads;

    if (selectedCategory) {
      filtered = filtered.filter((ad) => ad.category === selectedCategory.name);
    }

    if (selectedType) {
      filtered = filtered.filter((ad) => ad.jobCategory === selectedType.name);
    }

    setFilteredAds(filtered);
  }, [selectedCategory, selectedType, ads]);

  const { currentItems: currentAds, currentPage, totalPages, paginate } = usePaginate(filteredAds, adsPerPage);

  const handleAdClick = (ad) => {
    navigate(`/all-ads/${ad.id}`, { state: { ad } });
  };

  return (
    <>
      <Navigation />
      <div className="all-ads-container">
        <div className="sidebar">
          <h3>Filteri</h3>
          <h4>Kategorije</h4>
          <ul>
            {categories.map((category) => (
              <li
                key={category.id}
                className={selectedCategory === category ? "selected" : ""}
                onClick={() => setSelectedCategory(selectedCategory === category ? null : category)}
              >
                {category.name}
              </li>
            ))}
          </ul>
          <h4>Tipovi poslova</h4>
          <ul>
            {types.map((type) => (
              <li
                key={type.id}
                className={selectedType === type ? "selected" : ""}
                onClick={() => setSelectedType(selectedType === type ? null : type)}
              >
                {type.name}
              </li>
            ))}
          </ul>
          <button
            className="reset-button"
            onClick={() => {
              setSelectedCategory(null);
              setSelectedType(null);
            }}
          >
            Resetuj filtere
          </button>
        </div>

        <div className="ads-section">
          <h1 className="page-title">Svi Oglasi</h1>
          <div className="ads-list">
            {currentAds.map((ad) => (
              <div className="ad-card" key={ad.id} onClick={() => handleAdClick(ad)} style={{ cursor: "pointer" }}>
                <div className={`ad-type ${ad.category === "Posao" ? "job" : "internship"}`}>{ad.category}</div>
                <h2 className="ad-title">{ad.title}</h2>
                <p className="ad-company">{ad.company}</p>
                <p className="ad-location">{ad.location}</p>
                <button className="apply-button">Pogledaj oglas</button>
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
      </div>
    </>
  );
};

export default AllAds;
