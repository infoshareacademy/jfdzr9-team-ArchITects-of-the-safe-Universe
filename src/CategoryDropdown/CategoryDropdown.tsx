import React, { useState } from "react";

const CategoryDropdown = () => {
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <div>
      <select id="categories" value={selectedCategory} onChange={handleCategoryChange}>
        <option value="">Kategoria</option>
        <option value="literatura">Literatura piękna</option>
        <option value="fantastyka">Fantastyka</option>
        <option value="komiks">Komiks</option>
        <option value="reportaż">Reportaż</option>
        <option value="thriller">Thriller</option>
        <option value="fantastyka">Fantastyka</option>
        <option value="biografia">Biografia</option>
        <option value="biografia">Pozostałe</option>
      </select>
    </div>
  );
};

export default CategoryDropdown;
