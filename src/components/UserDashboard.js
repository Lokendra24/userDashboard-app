import React from "react";
import "../css/dashBoard.css";
import Header from "./Header";
import { Badge, LinearProgress } from "@mui/material";
import Footer from "./Footer";

function UserDashboard() {
  return (
    <div className="dashboard_container">
      <Header />
      <div className="dashboard_image_1" >
        <img src={require('../Assets/Group 46.png')} alt="image1" />
      </div>
      <Badge
        sx={{
          "& .MuiBadge-badge": {
            height: "35px",
            width: "35px",
            color: "#36A546",
            backgroundColor: "#5E5E5EB5",
            borderRadius: "50%",
            top: "-10px",
          },
        }}
        badgeContent={4}
        className="dashboard_image_2"
      ></Badge>
      <div className="lower_container"></div>
      <div>
        <p>Employee Productivity Dashboard</p>
      </div>
      <div className="prod_container">
        <div>
          <div>
            <p>Productivity on Monday</p>
            <p>4%</p>
          </div>
          <div>
            <LinearProgress
              sx={{
                width: "4px",
                height: "11px",
                borderRadius: "30px",
                backgroundColor: "#36A54680",
                "& .MuiLinearProgress-bar": {
                  backgroundColor: "#36A54680",
                },
                border: "1px solid #36A546",
              }}
              variant="determinate"
              value={100}
            />
          </div>
        </div>
        <div>
          <div>
            <p>Productivity on Tuesday</p>
            <p>92%</p>
          </div>
          <div>
            <LinearProgress
              sx={{
                width: "92px",
                height: "11px",
                borderRadius: "30px",
                backgroundColor: "#36A54680",
                "& .MuiLinearProgress-bar": {
                  backgroundColor: "#36A54680",
                },
                border: "1px solid #36A546",
              }}
              variant="determinate"
              value={100}
            />
          </div>
        </div>
        <div>
          <div>
            <p>Productivity on Wednesday</p>
            <p>122%</p>
          </div>
          <div>
            <LinearProgress
              sx={{
                width: "122px",
                height: "11px",
                borderRadius: "30px",
                backgroundColor: "#36A54680",
                "& .MuiLinearProgress-bar": {
                  backgroundColor: "#36A54680",
                },
                border: "1px solid #36A546",
              }}
              variant="determinate"
              value={100}
            />
          </div>
        </div>
        <div>
          <div>
            <p>Productivity on Thrusday</p>
            <p>93%</p>
          </div>
          <div>
            <LinearProgress
              sx={{
                width: "93px",
                height: "11px",
                borderRadius: "30px",
                backgroundColor: "#36A54680",
                "& .MuiLinearProgress-bar": {
                  backgroundColor: "#36A54680",
                },
                border: "1px solid #36A546",
              }}
              variant="determinate"
              value={100}
            />
          </div>
        </div>
        <div>
          <div>
            <p>Productivity on Friday</p>
            <p>89%</p>
          </div>
          <div>
            <LinearProgress
              sx={{
                width: "89px",
                height: "11px",
                borderRadius: "30px",
                backgroundColor: "#36A54680",
                "& .MuiLinearProgress-bar": {
                  backgroundColor: "#36A54680",
                },
                border: "1px solid #36A546",
              }}
              variant="determinate"
              value={100}
            />
          </div>
        </div>
        <div>
          <div>
            <p>Productivity on Saturday</p>
            <p>98%</p>
          </div>
          <div>
            <LinearProgress
              sx={{
                width: "98px",
                height: "11px",
                borderRadius: "30px",
                backgroundColor: "#36A54680",
                "& .MuiLinearProgress-bar": {
                  backgroundColor: "#36A54680",
                },
                border: "1px solid #36A546",
              }}
              variant="determinate"
              value={100}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default UserDashboard;
