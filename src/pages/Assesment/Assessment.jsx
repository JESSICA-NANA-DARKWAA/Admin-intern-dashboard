import React, { useState } from "react";
import Search from "../../components/search/search";
import Layout from "../../components/layout/Layout";
import "./Assessment.css";
const Assessment = () => {
  const handleSearch = (query) => {
    console.log("Search query:", query);
  };
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  /*const filteredInterns = internsData.filter((intern) => {
    // Filter based on name or other relevant fields
    return (
      intern.name.toLowerCase().includes(query.toLowerCase()) ||
      intern.department.toLowerCase().includes(query.toLowerCase()) ||
      intern.skills.some((skill) =>
        skill.toLowerCase().includes(query.toLowerCase())
      )
    );
  });
  console.log("Filtered interns:", filteredInterns);*/

  return (
    <Layout>
      <div className="search-nav">
        <Search onSearch={handleSearch} />
        {/* cOther components and content 
        <Link to="/Interns">
          <IoMdAdd />
          Add new intern
        </Link>*/}
      </div>
      <nav className="assess-nav">
        <label>
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
        </label>
        <h3>id</h3> <h3>image</h3> <h3>Name </h3>
        <h3>Email</h3> <h3>Status</h3> <h3>Action</h3>
      </nav>
    </Layout>
  );
};

export default Assessment;
