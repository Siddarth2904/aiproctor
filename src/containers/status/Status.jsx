import React from "react";
import { CopyLink, Terminated, PieChart } from "../../components";
import "./status.css";

const mockList = [
  {
    studentID: "1070",
    warningCnt: 5,
    message: "DevTools detected",
  },
  {
    studentID: "1071",
    warningCnt: 4,
    message: "Noise detected",
  },
  {
    studentID: "1072",
    warningCnt: 6,
    message: "Face covered",
  },
  {
    studentID: "1073",
    warningCnt: 2,
    message: "Full Screen Closed",
  },
];

const Status = ({
  time = "28/06/2023 15:30",
  name = "Internal 1 - DBMS",
  link = "asd-qwvs-dfs",
}) => {
  return (
    <div className="status-dashboard">
      <h1 className="title-heading">Test Dashboard</h1>

      <div className="test-details">
        <div className="test-item">
          <h4 className="test-time">{time}</h4>

          <h4 className="test-name">{name}</h4>

          <CopyLink link={link} />
        </div>
      </div>
      <div className="charts">
        <PieChart />
      </div>
      <div className="terminated-students">
        <h2 className="title-heading">Students Terminated</h2>
        <div className="terminated-boxes">
          {mockList.map((item) => (
            <Terminated
              studentID={item.studentID}
              warningCnt={item.warningCnt}
              message={item.message}
              key={item.studentID}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Status;
