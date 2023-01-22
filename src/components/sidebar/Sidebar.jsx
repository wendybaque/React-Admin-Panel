import React, { useContext } from "react";
import "./sidebar.scss";
import panel from "./panel.png";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AddBusinessIcon from "@mui/icons-material/AddBusiness";
import PaymentIcon from "@mui/icons-material/Payment";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
import MonitorHeartIcon from "@mui/icons-material/MonitorHeart";
import KeyIcon from "@mui/icons-material/Key";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";

const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);

  return (
    <div className="sidebar">
      <div className="top">
        <img src={panel} alt="favicon" />
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">WenDev Admin</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <Link to="/" style={{ textDecoration: "none" }}>
            <li>
              <DashboardIcon color="secondary" classname="icon" />
              <span>Dashboard</span>
            </li>
          </Link>
          <p className="title">LISTS</p>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <AccountCircleIcon color="secondary" classname="icon" />
              <span>Users</span>
            </li>
          </Link>
          <Link to="/products" style={{ textDecoration: "none" }}>
            <li>
              <AddBusinessIcon color="secondary" classname="icon" />
              <span>Products</span>
            </li>
          </Link>
          <li>
            <PaymentIcon color="secondary" classname="icon" />
            <span>Orders</span>
          </li>

          <li>
            <LocalShippingIcon color="secondary" classname="icon" />
            <span>Delivery</span>
          </li>
          <p className="title">USEFUL</p>
          <li>
            <QueryStatsIcon color="secondary" classname="icon" />
            <span>Stats</span>
          </li>
          <li>
            <CircleNotificationsIcon color="secondary" classname="icon" />
            <span>Notifications</span>
          </li>
          <p className="title">SERVICES</p>
          <li>
            <MonitorHeartIcon color="secondary" classname="icon" />
            <span>System health</span>
          </li>
          <li>
            <KeyIcon color="secondary" classname="icon" />
            <span>Logs</span>
          </li>
          <li>
            <SettingsSuggestIcon color="secondary" classname="icon" />
            <span>Settings</span>
          </li>
          <p className="title">ACCOUNT</p>
          <li>
            <ManageAccountsIcon color="secondary" classname="icon" />
            <span>Profile</span>
          </li>
          <li>
            <LogoutIcon color="secondary" classname="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        Color options:
        <div
          className="coloroption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="coloroption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div>
    </div>
  );
};

export default Sidebar;
