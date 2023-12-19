import React, { useState } from "react";
import "./table.css";
import { BiEdit } from "react-icons/bi";
import { AiOutlineDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import { BiSolidCheckbox } from "react-icons/bi";
const Table = ({ data }) => {
  const [isChecked, setIsChecked] = useState(false);
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  return (
    <table className="intern-table">
      <thead>
        <tr className="table-content">
          <label>
            <input
              type="checkbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
          </label>
          <th>Id</th>
          <th>Image</th>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody className="action-content">
        {data.map((item) => (
          <tr key={item.id} className="table-list">
            <label>
              <input
                type="checkbox"
                checked={isChecked}
                onChange={handleCheckboxChange}
              />
            </label>
            <td>{item.id}</td>
            <td>
              <img src={item.image} className="image-wrapper" />
            </td>
            <td>{item.Name}</td>
            <td>{item.Email}</td>
            <td>{item.Phone}</td>
            <td className="status-icons">
              <BiSolidCheckbox color="green" />
              {item.Status}
            </td>
            <td className="action-icons">
              <Link to="/Interns">
                <BiEdit size={30} color="#687182" />
              </Link>
              <Link to="/Interns">
                <AiOutlineDelete size={30} color="#687182" />
              </Link>
              {item.Action}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
