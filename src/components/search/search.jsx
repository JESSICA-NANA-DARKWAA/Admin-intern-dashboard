import React, { useState } from "react";
import "./search.css";
import { FaSearch } from "react-icons/fa";
import internsData from "../../components/internsData";

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
  /*const filteredResults = internsData.filter((intern) => {
    // Filter based on name or other relevant fields
    return (
      intern.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      intern.department.toLowerCase().includes(searchQuery.toLowerCase()) ||
      intern.skills.some((skill) =>
        skill.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  });
  setFilteredInterns(filteredResults);
  onSearch(filteredResults);*/

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
