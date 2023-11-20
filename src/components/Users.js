import React, { useState } from "react";
import "../css/users.css";
import Header from "./Header";
import { Badge } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import Footer from "./Footer";
import UserCard from "./UserCard";

import { userData } from "../userData";

function Users() {
  const [input,setInput]=useState('')
  const [data,setData]=useState(userData)

  const Handleclick=()=>{
    const newdata=userData.filter((data)=> data.name.includes(input) )
    setData(newdata)
    setInput('')
  }

  return (
    <div className="users_container">
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
      <div className="search_container" >
        <input type="text" placeholder="Search with name" value={input}  onChange={(e)=>setInput(e.target.value)}  />
        <div onClick={Handleclick} >
          <SearchIcon className="searchicon" />
        </div>
      </div>
      <div className="user_card_container" >
        {
          data.map((element,index)=> <UserCard data={element} index={index} key={index} /> )
        }
      </div>
      <Footer />
    </div>
  );
}

export default Users;
