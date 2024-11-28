import React from "react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className="footer-div">
      <div
        onClick={() => {
          navigate("/");
        }}
      >
        <img src={require("../../pic/home.png")} alt="" />{" "}
      </div>
      <div
        onClick={() => {
          navigate("/makeNewPost");
        }}
      >
        <img src={require("../../pic/plus.png")} alt="" />
      </div>
      <div
        onClick={() => {
          navigate("/search");
        }}
      >
        <img src={require("../../pic/search.png")} alt="" />
      </div>
    </div>
  );
};

export default Footer;
