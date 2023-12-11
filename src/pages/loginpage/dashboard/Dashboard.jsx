import React, { useState } from "react";
import Layout from "../../../components/layout/Layout";
import Modal from "../../../components/modal/modal";
const Dashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <Layout>
        {/*<h1>Intern Dashboard</h1>
        <button onClick={handleOpenModal}>Register Intern</button>
  <Modal isOpen={isModalOpen} onClose={handleCloseModal} />*/}
      </Layout>
    </div>
  );
};

export default Dashboard;
