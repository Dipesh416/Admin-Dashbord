import React from "react";

import {
  alpha,
  Button,
  Card,
  Divider,
  Grid,
  Menu,
  MenuItem,
  styled,
  Table,
  TableBody,
  TableCell,
  tableCellClasses,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import AddBoxIcon from "@mui/icons-material/AddBox";
import ExpandCircleDownIcon from "@mui/icons-material/ExpandCircleDown";

export const ClientDetails = () => {
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: "#854d0e",
      color: theme.palette.common.white,
      border: "1px solid #ddd",
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
      border: "1px solid #ddd",
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  }));
  return (
    <div>
      <Card className="mx-16 mt-12 h-[750px]">
        <div className="h-16 bg-yellow-800 text-white flex justify-between items-center">
          <p className="ml-5 text-xl">Client Details</p>
          <p className="mr-5 cursor-pointer">
            <Button variant="contained">Back</Button>
          </p>
        </div>
        <div className="h-10 flex justify-between items-center">
          <p className="ml-10 cursor-pointer">
            <Button variant="contained">
              <AddBoxIcon /> create
            </Button>
          </p>
          <p className="mr-10 cursor-pointer">
            <Button variant="contained">update limit</Button>
          </p>
        </div>
        <div>
          <TableContainer>
            <Table
              sx={{ minWidth: 700, borderCollapse: "collapse" }}
              aria-label="customized table"
            >
              <TableHead>
                <TableRow>
                  <StyledTableCell rowSpan={2}>#</StyledTableCell>
                  <StyledTableCell rowSpan={2} align="center"></StyledTableCell>
                  <StyledTableCell rowSpan={2} align="center">
                    code <SearchIcon style={{ fontSize: 20 }} />
                  </StyledTableCell>
                  <StyledTableCell rowSpan={2} align="center">
                    Name <SearchIcon style={{ fontSize: 20 }} />
                  </StyledTableCell>
                  <StyledTableCell rowSpan={2} align="center">
                    Agent
                  </StyledTableCell>
                  <StyledTableCell rowSpan={2} align="center">
                    Contact <SearchIcon style={{ fontSize: 20 }} />
                  </StyledTableCell>
                  <StyledTableCell rowSpan={2} align="center">
                    D.O.J
                  </StyledTableCell>
                  <StyledTableCell rowSpan={2} align="center">
                    P.W.D
                  </StyledTableCell>
                  <StyledTableCell rowSpan={2} align="center">
                    Expo
                  </StyledTableCell>

                  <StyledTableCell colSpan={3} align="center">
                    Client Comm %
                  </StyledTableCell>
                  <StyledTableCell rowSpan={2} align="center">
                    Chips
                  </StyledTableCell>
                  <StyledTableCell rowSpan={2} align="center">
                    Status
                  </StyledTableCell>
                </TableRow>
                <TableRow>
                  <StyledTableCell align="center">Type</StyledTableCell>
                  <StyledTableCell align="center">Match</StyledTableCell>
                  <StyledTableCell align="center">SSN</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <StyledTableRow>
                  <StyledTableCell component="th" scope="row">
                    <AddBoxIcon sx={{ color: "blue" }} />
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <ExpandCircleDownIcon sx={{ color: "blue" }} />
                  </StyledTableCell>

                  <StyledTableCell align="center">C4909</StyledTableCell>
                  <StyledTableCell align="center">test</StyledTableCell>
                  <StyledTableCell align="center">
                    testadmin (A913)
                  </StyledTableCell>
                  <StyledTableCell align="center">9189035573</StyledTableCell>
                  <StyledTableCell align="center">03-07-24</StyledTableCell>
                  <StyledTableCell align="center">a123</StyledTableCell>
                  <StyledTableCell align="center">0.00</StyledTableCell>
                  <StyledTableCell align="center">NOC</StyledTableCell>
                  <StyledTableCell align="center">0.0</StyledTableCell>
                  <StyledTableCell align="center">0.0</StyledTableCell>
                  <StyledTableCell align="center">0.0</StyledTableCell>
                  <StyledTableCell align="center">active</StyledTableCell>
                </StyledTableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </Card>
    </div>
  );
};
