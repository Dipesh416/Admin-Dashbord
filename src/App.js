
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Grid } from "@mui/material";
import { LeftSideBar } from "./component/LeftSideBar";
import { CreateSubadmin } from "./component/CreateSubadmin";
import { MiniAdminDeatils } from "./component/MiniAdminDeatils";
import { ClientDetails } from "./component/ClientDetails";

function App() {
  return (
    <Router>
      <Grid container>
        <Grid className="h-screen" item xs={2}>
          <LeftSideBar />
        </Grid>
        <Grid className="h-screen bg-slate-300" item xs={10}>
          <Routes>
            <Route path="/" element={<CreateSubadmin />} />
            <Route path="/create-subadmin" element={<CreateSubadmin />} />
            <Route path="/mini-admin-details" element={<MiniAdminDeatils />} />
            <Route path="/client-details" element={<ClientDetails />} />
           
          </Routes>
        </Grid>
      </Grid>
    </Router>
  );
}

export default App;
