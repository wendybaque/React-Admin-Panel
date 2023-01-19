import React from "react";
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

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <img src={panel} alt="favicon" />
        <span className="logo">WenDev Admin</span>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <DashboardIcon color="secondary" classname="icon" />
            <span>Dashboard</span>
          </li>
          <p className="title">LISTS</p>
          <li>
            <AccountCircleIcon color="secondary" classname="icon" />
            <span>Users</span>
          </li>
          <li>
            <AddBusinessIcon color="secondary" classname="icon" />
            <span>Products</span>
          </li>
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
      <div className="bottom">Color options:
        <div className="coloroption"></div>
        <div className="coloroption"></div>
      </div>
    </div>
  );
};

export default Sidebar;
