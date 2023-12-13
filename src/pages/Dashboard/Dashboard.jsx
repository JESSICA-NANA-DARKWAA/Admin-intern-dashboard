import React, { useState } from "react";
import Layout from "../../components/layout/Layout";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <Layout>
      <div className="main-cards">
        <div className="card">
          <div className="card-inner">
            <h3>Total number of interns</h3>
          </div>
          <h1>100</h1>
        </div>
        <div className="card">
          <div className="card-inner">
            <h3>Total number in Accra</h3>
          </div>
          <h1>50</h1>
        </div>
        <div className="card">
          <div className="card-inner">
            <h3>Total number in Takoradi</h3>
          </div>
          <h1>50</h1>
        </div>
        <nav className="secondary-navbars">
          <h2> Upcoming Events</h2>
          <div className="second-text">Date Time Office Mode</div>
        </nav>
      </div>
    </Layout>
  );
};
export default Dashboard;
