import React, { useState } from "react";
import "./search.css";
import { FaSearch } from "react-icons/fa";

const Search = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredInterns, setFilteredInterns] = useState([]);
  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };
  const handleFormSubmit = (event) => {
    event.preventDefault();
    onSearch(searchQuery);
  };
  return (
    <form onSubmit={handleFormSubmit} className="search-form">
      <input
        type="text"
        placeholder="Search "
        value={searchQuery}
        onChange={handleInputChange}
        className="search-input"
      />
      <button type="submit" className="search-button">
        <FaSearch />
      </button>
    </form>
  );
};
export default Search;
