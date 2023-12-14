import React, { useState } from "react";
import Layout from "../../components/layout/Layout";
import "./Dashboard.css";
import { HiUserGroup } from "react-icons/hi2";
import { GrGroup } from "react-icons/gr";

const Dashboard = () => {
  return (
    <Layout>
      <div className="main-cards">
        <div className="card">
          <div className="card-icon">
            <GrGroup />
          </div>

          <div className="card-inner">
            <h3>Total number of interns</h3>
          </div>
          <div className="icon-img">
            <h1>100</h1>
            {/* <HiUserGroup className="aaa" /> */}
          </div>
        </div>
        <div className="card">
          <div className="card-icon">
            <GrGroup />
          </div>
          <div className="card-inner">
            <h3>Total number in Accra</h3>
          </div>
          <h1>50</h1>
        </div>
        <div className="card">
          <div className="card-icon">
            <GrGroup />
          </div>
          <div className="card-inner">
            <h3>Total number in Takoradi</h3>
          </div>
          <h1>50</h1>
        </div>
        <table className="upcoming-events">
          <thead>
            <tr>
              <th colSpan={5} className="th-header">
                Upcoming Events
              </th>
            </tr>
            <tr className="actual-header">
              <th>Date</th>
              <th>Time</th>
              <th>Event</th>
              <th>Office</th>
              <th>Mode</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>01/12/2023</td>
              <td>10:15am</td>
              <td>General meeting</td>
              <td>Accra</td>
              <td>In person</td>
            </tr>
            <tr>
              <td>01/12/2023</td>
              <td>1:00pm</td>
              <td>General meeting</td>
              <td>Takoradi</td>
              <td>Online</td>
            </tr>
            <tr>
              <td>01/12/2023</td>
              <td>10:15am</td>
              <td>General meeting</td>
              <td>Accra</td>
              <td>In person</td>
            </tr>
            <tr>
              <td>01/12/2023</td>
              <td>10:15am</td>
              <td>General meeting</td>
              <td>Accra</td>
              <td>In person</td>
            </tr>
            <tr>
              <td>01/12/2023</td>
              <td>10:15am</td>
              <td>General meeting</td>
              <td>Accra</td>
              <td>In person</td>
            </tr>
            <tr>
              <td>01/12/2023</td>
              <td>10:15am</td>
              <td>General meeting</td>
              <td>Accra</td>
              <td>In person</td>
            </tr>
            <tr>
              <td>01/12/2023</td>
              <td>10:15am</td>
              <td>General meeting</td>
              <td>Accra</td>
              <td>In person</td>
            </tr>{" "}
            <tr>
              <td>01/12/2023</td>
              <td>10:15am</td>
              <td>General meeting</td>
              <td>Accra</td>
              <td>In person</td>
            </tr>{" "}
            <tr>
              <td>01/12/2023</td>
              <td>10:15am</td>
              <td>General meeting</td>
              <td>Accra</td>
              <td>In person</td>
            </tr>{" "}
            <tr>
              <td>01/12/2023</td>
              <td>10:15am</td>
              <td>General meeting</td>
              <td>Accra</td>
              <td>In person</td>
            </tr>{" "}
            <tr>
              <td>01/12/2023</td>
              <td>10:15am</td>
              <td>General meeting</td>
              <td>Accra</td>
              <td>In person</td>
            </tr>{" "}
            <tr>
              <td>01/12/2023</td>
              <td>10:15am</td>
              <td>General meeting</td>
              <td>Accra</td>
              <td>In person</td>
            </tr>{" "}
            <tr>
              <td>01/12/2023</td>
              <td>10:15am</td>
              <td>General meeting</td>
              <td>Accra</td>
              <td>In person</td>
            </tr>{" "}
            <tr>
              <td>01/12/2023</td>
              <td>10:15am</td>
              <td>General meeting</td>
              <td>Accra</td>
              <td>In person</td>
            </tr>{" "}
            <tr>
              <td>01/12/2023</td>
              <td>10:15am</td>
              <td>General meeting</td>
              <td>Accra</td>
              <td>In person</td>
            </tr>{" "}
            <tr>
              <td>01/12/2023</td>
              <td>10:15am</td>
              <td>General meeting</td>
              <td>Accra</td>
              <td>In person</td>
            </tr>{" "}
            <tr>
              <td>01/12/2023</td>
              <td>10:15am</td>
              <td>General meeting</td>
              <td>Accra</td>
              <td>In person</td>
            </tr>{" "}
            <tr>
              <td>01/12/2023</td>
              <td>10:15am</td>
              <td>General meeting</td>
              <td>Accra</td>
              <td>In person</td>
            </tr>{" "}
            <tr>
              <td>01/12/2023</td>
              <td>10:15am</td>
              <td>General meeting</td>
              <td>Accra</td>
              <td>In person</td>
            </tr>{" "}
            <tr>
              <td>01/12/2023</td>
              <td>10:15am</td>
              <td>General meeting</td>
              <td>Accra</td>
              <td>In person</td>
            </tr>{" "}
            <tr>
              <td>01/12/2023</td>
              <td>10:15am</td>
              <td>General meeting</td>
              <td>Accra</td>
              <td>In person</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Layout>
  );
};
export default Dashboard;
