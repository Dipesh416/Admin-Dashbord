
import React, { useState } from "react";
import { Card } from "@mui/material";
import { useNavigate } from "react-router-dom";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import LibraryBooksOutlinedIcon from "@mui/icons-material/LibraryBooksOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import AssessmentOutlinedIcon from "@mui/icons-material/AssessmentOutlined";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export const LeftSideBar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div>
      <Card className="h-screen space-y-8">
        <div className="h-screen flex flex-col bg-yellow-800 text-white">
          <div onClick={() => navigate("/create-subadmin")} style={{ cursor: 'pointer' }}>
            <DashboardOutlinedIcon style={{ fontSize: 30, margin: 10 }} />
            Dashboard
          </div>
          <div className="flex items-center" style={{ cursor: 'pointer' }} onClick={handleOpen}>
            <AccountCircleOutlinedIcon style={{ fontSize: 30, margin: 10 }} />
            Admin Details&nbsp;
            <ExpandMoreIcon sx={{ cursor: "pointer" }} />
          </div>
          {open && (
            <div>
              <div onClick={() => navigate("/mini-admin-details")} className="ml-20 m-3" style={{ cursor: 'pointer' }}>
                MiniAdmin Details
              </div>
              <div onClick={() => navigate("/client-details")} className="ml-20 m-3" style={{ cursor: 'pointer' }}>Client Details</div>
              <div className="ml-20 m-3">Super Agent Master</div>
              <div className="ml-20 m-3">Agent Master</div>
              <div className="ml-20 m-3">Client Master</div>
            </div>
          )}
          <div>
            <SportsSoccerIcon style={{ fontSize: 30, margin: 10 }} />
            Sports-Betting &nbsp;
            <ExpandMoreIcon sx={{ cursor: "pointer" }} />
          </div>
          <div>
            <LibraryBooksOutlinedIcon style={{ fontSize: 30, margin: 10 }} />
            Ledger&nbsp;
            <ExpandMoreIcon sx={{ cursor: "pointer" }} />
          </div>
          <div>
            <ArticleOutlinedIcon style={{ fontSize: 30, margin: 10 }} />
            Cash Transaction&nbsp;
            <ExpandMoreIcon sx={{ cursor: "pointer" }} />
          </div>
          <div>
            <AssessmentOutlinedIcon style={{ fontSize: 30, margin: 10 }} />
            Report&nbsp;
            <ExpandMoreIcon sx={{ cursor: "pointer" }} />
          </div>
          <div>
            <SettingsOutlinedIcon style={{ fontSize: 30, margin: 10 }} />
            WBT Setting
          </div>
        </div>
      </Card>
    </div>
  );
};
