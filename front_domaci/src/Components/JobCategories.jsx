import React, { useState } from "react";
import "./JobCategories.css";
import Navigation from "./Navigation";

const JobCategories = () => {
  const [categories, setCategories] = useState([
      { id: 1, name: "Front-end" },
      { id: 2, name: "Back-end" },
      { id: 3, name: "Full-stack" },
      { id: 4, name: "IT Support" },
      { id: 5, name: "Mobile Development" },
      { id: 6, name: "Data Science" },
      { id: 7, name: "Java Developer" },
      { id: 8, name: "UX/UI Design" },
  ]);
  const [newCategory, setNewCategory] = useState("");

  const handleAddCategory = () => {
    if (newCategory.trim()) {
      setCategories([
        ...categories,
        { id: categories.length + 1, name: newCategory },
      ]);
      setNewCategory("");
    } else {
      alert("Naziv tipa ne može biti prazan!");
    }
  };

  const handleDeleteCategory = (id) => {
    const updatedCategories = categories.filter((category) => category.id !== id);
    setCategories(updatedCategories);
  };

  return (
    <>
        <Navigation/>
        <div className="categories-page">
        <h1>Tipovi poslova i praksi</h1>
        <div className="categories-list">
            {categories.map((category) => (
            <div key={category.id} className="category-item">
                <span>{category.name}</span>
                <button
                className="delete-btn"
                onClick={() => handleDeleteCategory(category.id)}
                >
                Obriši
                </button>
            </div>
            ))}
        </div>
        <div className="add-category">
            <input
            type="text"
            placeholder="Nova kategorija"
            value={newCategory}
            onChange={(e) => setNewCategory(e.target.value)}
            />
            <button onClick={handleAddCategory}>Dodaj</button>
        </div>
        </div>
    </>
  );
};

export default JobCategories;
