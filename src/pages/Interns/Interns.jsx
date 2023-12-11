import React, { useState } from "react";
import Modal from "../../components/modal/modal";
import Layout from "../../components/layout/Layout";
import "./interns.css";
import { IoMdAdd } from "react-icons/io";
import { IoClose } from "react-icons/io5";

const INITIALVALUE = {
  name: "",
  email: "",
  phone: "",
  location: "",
  internshipstartdate: "",
  intershipenddate: "",
  universityCollegede: "",
  feildofstudy: "",
  gender: "",
  focus: "",
  About: "",
};

const Interns = ({ onClose }) => {
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
    console.log("New Intern:", newIntern);
    setNewIntern(INITIALVALUE);
    handleCloseModal();
  };

  return (
    <Layout>
      <div>
        <div onClick={handleOpenModal} className="add-btn">
          {" "}
          <IoMdAdd />
          Add new intern
        </div>
        <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
          <nav className="add-nav">
            <p>Add new intern</p>
            <div className="modal-close" onClick={onClose}>
              <IoClose />
            </div>
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
                <input
                  className="form-input"
                  type="location"
                  name="Location "
                  value={newIntern.location}
                  onChange={handleInputChange}
                />
              </label>
              <label className="form-label">
                Internship start date:
                <input
                  className="form-input"
                  type="text"
                  name="start-date "
                  value={newIntern.date}
                  onChange={handleInputChange}
                />
              </label>
              <label className="form-label">
                Internship end date:
                <input
                  className="form-input"
                  type="text"
                  name="start-date "
                  value={newIntern.date}
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
                <input
                  className="form-input"
                  type="text"
                  name="gender"
                  value={newIntern.gender}
                  onChange={handleInputChange}
                />
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
              <label>
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
    </Layout>
  );
};

export default Interns;
