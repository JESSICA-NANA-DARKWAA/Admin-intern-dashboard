import React, { useContext, useState } from "react";
import Modal from "../../components/modal/modal";
import { Link } from "react-router-dom";
import Layout from "../../components/layout/Layout";
import "./Intern.css";
import { IoMdAdd } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import Search from "../../components/search/search";
import { AppContext } from "../../AppContext";

const INITIALVALUE = {
  name: "",
  email: "",
  phone: "",
  location: "",
  internshipStartDate: "",
  intershipEndDate: "",
  universityCollegede: "",
  feildofstudy: "",
  gender: "",
  focus: "",
  About: "",
};

const Interns = ({ onClose }) => {
  const { dispatch } = useContext(AppContext);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };
  const [newIntern, setNewIntern] = useState(INITIALVALUE);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewIntern((prevIntern) => ({
      ...prevIntern,
      [name]: value,
    }));
  };
  const handleRegisterIntern = () => {
    console.log("kbslablablabslabsalb");
    console.log("kbslablablabslabsalb");
    console.log("kbslablablabslabsalb");
    dispatch({
      type: "ADD",
      payload: newIntern,
    });
    setNewIntern(INITIALVALUE);
    handleCloseModal();
  };

  const handleSelect = (e) => {
    const { value } = e.target;
    setNewIntern((state) => ({ ...state, location: value }));
  };
  return (
    <Layout>
      <div>
        <div className="add-btn-div">
          <button onClick={handleOpenModal} className="add-btn">
            <IoMdAdd className="btn-icon" />
            Add new intern
          </button>
        </div>

        <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
          <nav className="add-nav">
            <p>Add new intern</p>
            <button className="modal-close-1" onClick={handleCloseModal}>
              <IoClose size={30} className="close-btn" />
            </button>
          </nav>
          <form className="form-div-container">
            <div className="form-container">
              <label className="form-label">
                Name:
                <input
                  className="form-input"
                  type="text"
                  name="name"
                  value={newIntern.name}
                  onChange={handleInputChange}
                />
              </label>
              <label className="form-label">
                Email:
                <input
                  className="form-input"
                  type="email"
                  name="email"
                  value={newIntern.email}
                  onChange={handleInputChange}
                />
              </label>
              <label className="form-label">
                Phone:
                <input
                  className="form-input"
                  type="numbers"
                  name="contact"
                  value={newIntern.contact}
                  onChange={handleInputChange}
                />
              </label>
              <label className="form-label">
                Location:
                <select
                  className="form-input"
                  onChange={handleSelect}
                  value={newIntern.location}
                >
                  <option value="Accra">Accra</option>
                  <option value="Takoradi">Takoradi</option>
                </select>
              </label>
              <label className="form-label">
                Internship start date:
                <input
                  className="form-input"
                  type="date"
                  name="internshipStartDate"
                  value={newIntern.internshipStartDate}
                  onChange={handleInputChange}
                />
              </label>
              <label className="form-label">
                Internship end date:
                <input
                  className="form-input"
                  type="date"
                  name="intershipEndDate"
                  value={newIntern.intershipEndDate}
                  onChange={handleInputChange}
                />
              </label>
              <label className="form-label">
                University/College:
                <input
                  className="form-input"
                  type="text"
                  name="school "
                  value={newIntern.school}
                  onChange={handleInputChange}
                />
              </label>
              <label className="form-label">
                Feild of study:
                <input
                  className="form-input"
                  type="feild"
                  name="feild"
                  value={newIntern.feild}
                  onChange={handleInputChange}
                />
              </label>
              <label className="form-label">
                Gender:
                <select className="form-input">
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </label>
              <label className="form-label">
                Focus:
                <input
                  className="form-input"
                  type="text"
                  name="focus "
                  value={newIntern.focus}
                  onChange={handleInputChange}
                />
              </label>

              <label className="form-label2">
                About:
                <input
                  className="form-input2"
                  type="text"
                  name="about "
                  value={newIntern.About}
                  onChange={handleInputChange}
                />
              </label>
            </div>

            <div className="form-image-box">
              <p>Image</p>

              <label>
                <input
                  type="file"
                  className="file-input"
                  value={newIntern.About}
                  onChange={handleInputChange}
                />
              </label>
              <IoMdAdd size={100} />
            </div>
          </form>
          <button className="addup-btn" onClick={handleRegisterIntern}>
            <IoMdAdd />
            Add new intern
          </button>
        </Modal>
      </div>

      <Search />
    </Layout>
  );
};

export default Interns;
