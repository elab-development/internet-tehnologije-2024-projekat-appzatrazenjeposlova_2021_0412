import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CompaniesPage.css";
import Navigation from "./Navigation";

const CompaniesPage = () => {
  const [companies, setCompanies] = useState([
    {
      id: 1,
      name: "Tech Solutions",
      imageUrl: "/images/tech-solutions.jpg",
      description: "IT kompanija specijalizovana za razvoj softverskih rešenja.",
      category: "IT",
    },
    {
      id: 2,
      name: "Web Innovators",
      imageUrl: "/images/web-innovators.jpg",
      description: "Kompanija koja se bavi razvojem web aplikacija i rešenja.",
      category: "IT",
    },
    {
      id: 3,
      name: "Creative Studio",
      imageUrl: "/images/creative-studio.jpg",
      description: "Studio specijalizovan za dizajn i kreativne usluge.",
      category: "Dizajn",
    },
    {
      id: 4,
      name: "IT Experts",
      imageUrl: "/images/it-experts.jpg",
      description: "Profesionalci u oblasti IT infrastrukture i podrške.",
      category: "IT",
    },
  ]);
  

  const [categories, setCategories] = useState([
    { id: 1, name: "IT" },
    { id: 2, name: "Marketing" },
    { id: 3, name: "Dizajn" },
    { id: 4, name: "Obrazovanje" },
    { id: 5, name: "Ostalo" },
  ]);

  const [selectedCategory, setSelectedCategory] = useState(null);
  const navigate = useNavigate();

  const handleCardClick = (company) => {
    console.log(company);
    navigate(`/kompanije/${company.id}`, { state: { company } });
  };
  

  const filteredCompanies = selectedCategory ? companies.filter(
        (company) => company.category === selectedCategory.name
      )
    : companies;

  return (
    <>
      <Navigation />
      <div className="companies-container">
        {/* Sidebar */}
        <div className="sidebar">
          <h3>Filteri</h3>
          <h4>Kategorije</h4>
          <ul>
            {categories.map((category) => (
              <li
                key={category.id}
                className={selectedCategory === category ? "selected" : ""}
                onClick={() =>
                  setSelectedCategory(
                    selectedCategory === category ? null : category
                  )
                }
              >
                {category.name}
              </li>
            ))}
          </ul>
          <button
            className="reset-button"
            onClick={() => setSelectedCategory(null)}
          >
            Resetuj filtere
          </button>
        </div>

        <div className="companies-main">
          <h1 className="companies-title">Sve Kompanije</h1>
          <div className="companies-grid">
            {filteredCompanies.map((company) => (
              <div
                key={company.id}
                className="company-card"
                onClick={() => handleCardClick(company)}
              >
                <div className="company-image">
                  <img src={company.imageUrl} alt={company.name} />
                </div>
                <div className="company-info">
                  <h2 className="company-name">{company.name}</h2>
                  <p className="company-description">{company.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CompaniesPage;
