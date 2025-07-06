import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import AdsList from "./AdsList";
import "./CompanyDetail.css";
import Navigation from "./Navigation";

const CompanyDetail = () => {
  const location = useLocation();
  const { company } = location.state;
  const navigate = useNavigate();
  const [filteredAds, setFilteredAds] = useState([]);

  useEffect(() => {
   
    const allAds = AdsList; 
    const companyAds = allAds.filter(ad => ad.company === company.name);

    setFilteredAds(companyAds);
  }, [company]);

  const handleAdClick = (ad) => {
    navigate(`/all-ads/${ad.id}`, { state: { ad } });
  };

  return (
    <>
      <Navigation />
      <div className="company-detail-container">
        {company ? (
          <>
            <div className="company-detail-header">
              <h1>{company.name}</h1>
              <img
                src={company.imageUrl}
                alt={company.name}
                className="company-detail-image"
              />
              <p>{company.description}</p>
            </div>
            <div className="company-ads">
              <h2>Oglasi</h2>
              <div className="ads-list">
                {filteredAds.map((ad) => (
                  <div
                    key={ad.id}
                    className="ad-card"
                    onClick={() => handleAdClick(ad)}
                    style={{ cursor: "pointer" }}
                  >
                    <h3>{ad.title}</h3>
                    <p>{ad.description}</p>
                    <p>{ad.location}</p>
                  </div>
                ))}
              </div>
            </div>
          </>
        ) : (
          <p>Učitavanje...</p>
        )}
      </div>
    </>
  );
};

export default CompanyDetail;
