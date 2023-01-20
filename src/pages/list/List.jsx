import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";

import "./list.scss";
import Datatable from "../../components/datatable/Datatable";

const List = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listcontainer">
        <Navbar />
        <Datatable />
      </div>
    </div>
  );
};

export default List;
