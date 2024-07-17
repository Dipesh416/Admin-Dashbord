import React, { useState } from "react";
import {
  TextField,
  Button,
  Typography,
  MenuItem,
  Container,
  Box,
  Card,
  InputLabel,
} from "@mui/material";
import ExpandCircleDownIcon from "@mui/icons-material/ExpandCircleDown";

export const CreateSubadmin = () => {
  return (
    <Card className="mx-16 mt-12 h-[750px] ">
      <div className="h-16 bg-yellow-800 text-white flex justify-between items-center">
        <p className="ml-5 text-xl">Create Subadmin</p>
        <p className="mr-5 cursor-pointer">
          <Button variant="contained">Back</Button>
        </p>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex w-[600] ">
          <form>
            <div className="flex items-center justify-between w-[600px]">
              <InputLabel
                required
                sx={{
                  display: "flex",
                  width: 200,
                  fontWeight: 700,
                  marginLeft:3,
                }}
              >
                Name
              </InputLabel>
              <TextField
                style={{ width: "100%", margin: "5px" }}
                type="text"
                label="Enter full name"
                variant="outlined"
              />
            </div>
            <div className="flex items-center justify-between w-[600px]">
              <InputLabel
                required
                sx={{
                  display: "flex",
                  width: 200,
                  fontWeight: 700,
                  marginLeft:3,
                }}
              >
                My Coins
              </InputLabel>
              <TextField
                style={{ width: "100%", margin: "5px" }}
                type="text"
                label="100"
                variant="outlined"
              />
            </div>
            <div className="flex items-center justify-between w-[600px]">
              <InputLabel
                required
                sx={{
                  display: "flex",
                  width: 200,
                  fontWeight: 700,
                  marginLeft:3,
                }}
              >
                Contact No.
              </InputLabel>
              <TextField
                style={{ width: "100%", margin: "5px" }}
                type="text"
                label="Enter mobile number"
                variant="outlined"
              />
            </div>
            <br />
            <Typography variant="h5" component="h3" marginLeft={3}>
              Subadmin Match Share And Commision
            </Typography>
            <div className="flex items-center justify-between w-[600px]">
              <InputLabel
                
                sx={{
                  display: "flex",
                  width: 200,
                  fontWeight: 600,
                  marginLeft:3,
                }}
              >
            Match Share(%)
              </InputLabel>
              <TextField
                style={{ width: "100%", margin: "5px" }}
                type="text"
                label="96"
                variant="outlined"
              />
            </div>
            <div className="flex items-center justify-between w-[600px]">
              <InputLabel
                
                sx={{
                  display: "flex",
                  width: 200,
                  fontWeight: 700,
                  marginLeft:3,
                }}
              >
                Comm Type
              </InputLabel>
              <TextField
                style={{ width: "100%", margin: "5px" }}
                type="text"
                label="BetByBet"
                variant="outlined"
              />
            </div>
            <br/>
            <Typography variant="h5" component="h3" marginLeft={3}>
              Subadmin Casino Share And Commision
            </Typography>
            <div className="flex items-center justify-between w-[600px]">
              <InputLabel
                
                sx={{
                  display: "flex",
                  width: 200,
                  fontWeight: 600,
                  marginLeft:3,
                }}
              >
            Casino Share %
              </InputLabel>
              <TextField
                style={{ width: "100%", margin: "5px" }}
                type="text"
                label="96"
                variant="outlined"
              />
            </div>
            <div className="flex items-center justify-between w-[600px]">
              <InputLabel
                
                sx={{
                  display: "flex",
                  width: 200,
                  fontWeight: 700,
                  marginLeft:3,
                }}
              >
                Casino Comm
              </InputLabel>
              <TextField
                style={{ width: "100%", margin: "5px" }}
                type="text"
                label="2"
                variant="outlined"
              />
            </div>
          </form>
        
        </div>
        <div className=" w-[600px] mr-5">
          <form>
            <div className="flex items-center justify-between w-[600px]">
              <InputLabel
                required
                sx={{
                  display: "flex",
                  width: 200,
                  fontWeight: 700,
                  marginLeft:3,
                }}
              >
                Refrence
              </InputLabel>
              <TextField
                style={{ width: "100%", margin: "5px" }}
                type="text"
                label="Enter Refrence"
                variant="outlined"
              />
            </div>
            <div className="flex items-center justify-between w-[600px]">
              <InputLabel
                required
                sx={{
                  display: "flex",
                  width: 200,
                  fontWeight: 700,
                  marginLeft:3,
                }}
              >
                Coins
              </InputLabel>
              <TextField
                style={{ width: "100%", margin: "5px" }}
                type="text"
                label="Subadmin Coins"
                variant="outlined"
              />
            </div>
            <div className="flex items-center justify-between w-[600px]">
              <InputLabel
                required
                sx={{
                  display: "flex",
                  width: 200,
                  fontWeight: 700,
                  marginLeft:3,
                }}
              >
                Password
              </InputLabel>
              <TextField
                style={{ width: "100%", margin: "5px" }}
                type="text"
                label="Enter Password"
                variant="outlined"
              />
            </div>

            <br />
            <Typography variant="h5" component="h3" marginLeft={5}>&nbsp;</Typography>
            <div className="flex items-center justify-between w-[600px]">
              <InputLabel
                required
                sx={{
                  display: "flex",
                  width: 200,
                  fontWeight: 700,
                  marginLeft:3,
                }}
              >
                Match Share(%)
              </InputLabel>
              <TextField
                style={{ width: "100%", margin: "5px" }}
                type="text"
                label="Subadmin Match Share"
                variant="outlined"
              />
            </div>
            <div className="flex items-center justify-between w-[600px]">
              <InputLabel
                required
                sx={{
                  display: "flex",
                  width: 200,
                  fontWeight: 700,
                  marginLeft:3,
                }}
              >
                Comm Type
              </InputLabel>
              <TextField
                style={{ width: "100%", margin: "5px" }}
                type="text"
                label="Commision Type "
                variant="outlined"
              />
            </div>
            <br />
            <Typography variant="h5" component="h3" marginLeft={5}>&nbsp;</Typography>
            <div className="flex items-center justify-between w-[600px]">
              <InputLabel
                required
                sx={{
                  display: "flex",
                  width: 200,
                  fontWeight: 700,
                  marginLeft:3,
                }}
              >
                Casino Share %
              </InputLabel>
              <TextField
                style={{ width: "100%", margin: "5px" }}
                type="text"
                label="Subadmin Casino Share"
                variant="outlined"
              />
            </div>
            <div className="flex items-center justify-between w-[600px]">
              <InputLabel
                required
                sx={{
                  display: "flex",
                  width: 200,
                  fontWeight: 700,
                  marginLeft:3,
                }}
              >
                Casino Comm 
              </InputLabel>
              <TextField
                style={{ width: "100%", margin: "5px" }}
                type="text"
                label="Casino Commision  "
                variant="outlined"
              />
            </div>
          </form>
          <Button
              type="submit"
              variant="contained"
              color="primary"
              style={{float:"right"}}
              
            >
              Submit
            </Button>
        </div>
      </div>
    </Card>
  );
};
