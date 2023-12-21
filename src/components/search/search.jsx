import React, { useState } from "react";
import { internData as users } from "../../internData";
import Table from "../../table";
import "./search.css";
import { IoIosSearch } from "react-icons/io";

function Search() {
  const [searchQuery, setSearchQuery] = useState("");
  const [internData, setInternData] = useState(users);

  const keys = ["id", "Image", "Name", "Email", "Phone", "Status", "Action"];
  const search = () => {
    return users.filter(
      (item) =>
        item.Name.toLowerCase().includes(searchQuery.toLocaleLowerCase()) ||
        item.Email.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.Phone.toLocaleLowerCase().includes(
          searchQuery.toLocaleLowerCase()
        ) ||
        item.id.toLocaleLowerCase().includes(searchQuery.toLocaleLowerCase())
    );
  };
  const handleSearch = () => {
    setInternData(search());
  };

  return (
    <>
      <div className="app">
        <div className="search-container">
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button onClick={() => handleSearch()}>
            <IoIosSearch color="white" size={25} />
          </button>
          <div className="show-content">show:20 per page 1 2 3 4</div>
        </div>

        <Table data={internData} />
      </div>
    </>
  );
}
export default Search;
