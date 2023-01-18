import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Widget from "../../components/widget/Widget";
import "./home.scss"


const Home = () => {
  return <div className="home">
    <Sidebar/>
    <div className="homecontainer">
      <Navbar />
      <div className="widgets">
        <Widget type="user"/>
        <Widget type="order"/>
        <Widget type="earning"/>
        <Widget type="balance"/>
      </div>
    </div>
  </div>;
};

export default Home;
