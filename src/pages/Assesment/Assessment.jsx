import React, { useState } from "react";
import Layout from "../../components/layout/Layout";
import "./Assessment.css";
import Search from "../../components/search/search";
const Assessment = () => {
  const handleSearch = (query) => {
    console.log("Search query:", query);
  };
  const [isChecked, setIsChecked] = useState(false);
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  return (
    <Layout>
      <div className="search-nav"></div>
      <nav className="assess-nav">
        <label>
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
        </label>
        <h3>ID</h3> <h3>IMAGE</h3> <h3>NAME </h3>
        <h3>EMAIL</h3> <h3>STATUS</h3> <h3>ACTION</h3>
      </nav>
    </Layout>
  );
};
export default Assessment;
