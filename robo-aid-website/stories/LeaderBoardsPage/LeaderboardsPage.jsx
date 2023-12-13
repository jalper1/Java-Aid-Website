import React, { useEffect, useState } from "react";
import "./leaderboardsPage.css";
import { Header } from "../Header/Header";
import { Table } from "react-bootstrap";

const LeaderboardsPage = () => {
  const [data, setData] = useState([]);
  const [time, setTime] = useState(1);
  const [oneNotShown, setOneNotShown] = useState(true);
  const [twoNotShown, setTwoNotShown] = useState(false);
  const [threeNotShown, setThreeNotShown] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:6007/leaderboard/${time}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
    if (time === 1) {
      setOneNotShown(false);
      setTwoNotShown(true);
      setThreeNotShown(true);
    } else if (time === 2) {
      setOneNotShown(true);
      setTwoNotShown(false);
      setThreeNotShown(true);
    } else if (time === 3) {
      setOneNotShown(true);
      setTwoNotShown(true);
      setThreeNotShown(false);
    }
  }, [time]);

  return (
    <>
      {sessionStorage.getItem("logstatus") === "loggedin" ? (
        <div className="page">
          <Header />
          <div className="title">
            <h1>Leaderboard</h1>
            <div className="times">
              <h3 className="clickable" onClick={() => setTime(1)}>
                Level 1 Times
              </h3>
              <h3 className="clickable" onClick={() => setTime(2)}>
                Level 2 Times
              </h3>
              <h3 className="clickable" onClick={() => setTime(3)}>
                Level 3 Times
              </h3>
            </div>
            <Table className="table" bordered>
              <thead>
                <tr>
                  <th>Email</th>
                  <th hidden={oneNotShown}>Level One Time</th>
                  <th hidden={twoNotShown}>Level Two Time</th>
                  <th hidden={threeNotShown}>Level Three Time</th>
                </tr>
              </thead>
              <tbody>
                {data.map((data, index) => (
                  <tr key={index}>
                    <td>{data.email}</td>
                    <td hidden={oneNotShown}>{data.bestTime1}</td>
                    <td hidden={twoNotShown}>{data.bestTime2}</td>
                    <td hidden={threeNotShown}>{data.bestTime3}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </div>
      ) : (
        <div className="page">
          <Header />
          <div className="title">
            <h1>Please log in to view the leaderboard</h1>
          </div>
        </div>
      )}
    </>
  );
};

export default LeaderboardsPage;
