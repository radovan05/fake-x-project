import React from "react";
import "./Header.css";
import { useNavigate } from "react-router-dom";
import { useEffect,useState } from "react";

const Header = () => {
  const navigate = useNavigate();
  const [pic,setPic]= useState(undefined);
  // function getPicture(data){
    
  //  setPic(data.avatar); 
  // }
  useEffect(() => {
    fetch(`https://6745ca5b512ddbd807f9a8b4.mockapi.io/apiFakeX/v1/user/${parseInt(localStorage.getItem("user"))}`)
  .then((res) => res.json())
  .then((data) =>  setPic(data.avatar)).catch();
  },[]);
 


  return (
    <> 
      <div className="header">
        <p
          onClick={() => {
            navigate("/");
          }}
        >
          R
        </p>
        <div className="profile-div-header">
          {
            localStorage.getItem("user") ? <img src={pic} /> : <p  onClick={() => {
              navigate("/loginPage");
            }}>Login | Register</p>
           }
        </div>
      </div>
    </>
  );
};

export default Header;
