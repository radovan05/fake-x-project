import React from "react";
import "./LoginPage.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";


const LogInPage = () => {
  const navigate = useNavigate();
  let ApiData;
  let username;
  let password;
  let accId= undefined;
  useEffect(() => {
    fetch("https://6745ca5b512ddbd807f9a8b4.mockapi.io/apiFakeX/v1/user")
      .then((res) => res.json())
      .then((data) => (ApiData = data));
  }, []);

  return (
    <>
 
    <div className="login-form">
      <p className="title">Log in</p>
      <div className="form">
        <input type="text" placeholder="Username" onChange={(e)=>{
            username=e.target.value;
        }}/>
        <input type="text" placeholder="Password" className="pw" onChange={(e)=>{
            password=e.target.value.toString();
        }}/>
      </div>
      <button
        onClick={() => {
            
           ApiData.filter((el)=>{
            if(el.username===username){
               
                if(el.password ===password){
                   
                    accId=  el.id;              
                }            
            }  
          })
          accId ? (()=>{localStorage.setItem('user',accId); navigate("/")})(): alert("Wrong Login info!")
        } }
      >
        Log In
      </button>
      <p
        onClick={() => {
          navigate("/registerPage");
        }}
      >
        Don`t have an account? Register
      </p>
    </div>
    </>
  );
};

export default LogInPage;
