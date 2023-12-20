import React, { useContext } from "react";
import Layout from "../../components/layout/Layout";
import "./Dashboard.css";
import { AppContext } from "../../AppContext";

import { HiUserGroup } from "react-icons/hi2";

const Dashboard = () => {
  const { data, dispatch } = useContext(AppContext);

  console.log(data);

  return (
    <Layout>
      <div className="main-cards">
        <div className="card">
          <div className="card-icon">
            <HiUserGroup />
          </div>

          <div className="card-inner">
            <h3>Total number of interns</h3>
          </div>
          <div className="icon-img">
            <h1>{data.totalNumberOfInterns}</h1>
          </div>
        </div>
        <div className="card">
          <div className="card-icon">
            <HiUserGroup />
          </div>
          <div className="card-inner">
            <h3>Total number in Accra</h3>
          </div>
          <h1>{data.totalNumberInAccra}</h1>
        </div>
        <div className="card">
          <div className="card-icon">
            <HiUserGroup />
          </div>
          <div className="card-inner">
            <h3>Total number in Takoradi</h3>
          </div>
          <h1>{data.totalNumberInTakoradi}</h1>
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
          </tbody>
        </table>

        <table className="end-soon">
          <thead>
            <tr>
              <th colSpan={2} className="th-header">
                Internships ending soon
              </th>
            </tr>
            <tr className="actual-header">
              <th>Names</th>
              <th>Days Left</th>
            </tr>
          </thead>
          <tbody>
            {data.interns.map((item) => {
              return (
                <tr>
                  <td>{item.name}</td>
                  <td>
                    {Math.ceil(
                      (new Date(item.endDate).getTime() -
                        new Date(item.startDate).getTime()) /
                        (1000 * 60 * 60 * 24)
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </Layout>
  );
};
export default Dashboard;
