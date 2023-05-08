import React from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ArticleIcon from '@mui/icons-material/Article';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className=" flex flex-col w-full h-1/2 items-center justify-start">
      <div className="h-2/6 bg-light-blue w-full mb-3">
        <h5 className="font-semibold  text-2xl text-white flex justify-center items-center h-full">
          DABLER
        </h5>
      </div>
      <Link to={"/"} className="hover:bg-light-blue p-4 w-full text-white flex gap-3 flex-wrap">
        <DashboardIcon />
        <span>Dashboard</span>
      </Link>
      <Link to={"/projects"} className="hover:bg-light-blue p-4 w-full text-white flex gap-3 flex-wrap">
        <ArticleIcon />
        <span>Projects</span>
      </Link>
      <Link to={"/"} className="hover:bg-light-blue p-4 w-full text-white flex gap-3 flex-wrap">
        <ImportContactsIcon />
        <span>Dictionary</span>
      </Link>
      <Link to={"/"} className="hover:bg-light-blue p-4 w-full text-white flex gap-3 flex-wrap">
        <NotificationsIcon />
        <span>Incidents</span>
      </Link>  
      <Link to={"/"} className="hover:bg-light-blue p-4 w-full text-white flex gap-3 flex-wrap">
        <SettingsIcon />
        <span>Manage</span>
      </Link>
    </div>
  );
};

export default Sidebar;
