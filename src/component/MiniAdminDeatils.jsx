import React from "react";
import {
  Button,
  Card,
  Grid,
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

export const MiniAdminDeatils = () => {
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
      <Card className="mx-16 mt-12 h-[750px] ">
        <div className="h-16 bg-yellow-800 text-white flex justify-between items-center">
          <p className="ml-5 text-xl">MiniAdmin Details</p>
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
                    Admin
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
                  <StyledTableCell colSpan={2} align="center">
                    Subadmin Share %
                  </StyledTableCell>
                  <StyledTableCell colSpan={3} align="center">
                    Subadmin Comm %
                  </StyledTableCell>
                  <StyledTableCell rowSpan={2} align="center">
                    Chips
                  </StyledTableCell>
                  <StyledTableCell rowSpan={2} align="center">
                    Status
                  </StyledTableCell>
                </TableRow>
                <TableRow>
                  <StyledTableCell align="center">Match shr</StyledTableCell>
                  <StyledTableCell align="center">Casino shr</StyledTableCell>
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
                  <StyledTableCell align="center">AD185</StyledTableCell>
                  <StyledTableCell align="center">Ayush</StyledTableCell>
                  <StyledTableCell align="center">
                    demo (ADM133)
                  </StyledTableCell>
                  <StyledTableCell align="center">9189035573</StyledTableCell>
                  <StyledTableCell align="center">03-07-24</StyledTableCell>
                  <StyledTableCell align="center">Ayush@12454</StyledTableCell>
                  <StyledTableCell align="center">10</StyledTableCell>
                  <StyledTableCell align="center">10</StyledTableCell>
                  <StyledTableCell align="center">NOC</StyledTableCell>
                  <StyledTableCell align="center">0.0</StyledTableCell>
                  <StyledTableCell align="center">0.0</StyledTableCell>
                  <StyledTableCell align="center">0.0</StyledTableCell>
                  <StyledTableCell align="center">inactive</StyledTableCell>
                </StyledTableRow>
                <StyledTableRow>
                  <StyledTableCell component="th" scope="row">
                    <AddBoxIcon sx={{ color: "blue" }} />
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <ExpandCircleDownIcon sx={{ color: "blue" }} />
                  </StyledTableCell>
                  <StyledTableCell align="center">AD186</StyledTableCell>
                  <StyledTableCell align="center">vikashkumar</StyledTableCell>
                  <StyledTableCell align="center">
                    demo (ADM133)
                  </StyledTableCell>
                  <StyledTableCell align="center">7509987654</StyledTableCell>
                  <StyledTableCell align="center">03-07-24</StyledTableCell>
                  <StyledTableCell align="center">vikash@12454</StyledTableCell>
                  <StyledTableCell align="center">16</StyledTableCell>
                  <StyledTableCell align="center">13</StyledTableCell>
                  <StyledTableCell align="center">NOC</StyledTableCell>
                  <StyledTableCell align="center">0.0</StyledTableCell>
                  <StyledTableCell align="center">0.0</StyledTableCell>
                  <StyledTableCell align="center">46.0</StyledTableCell>
                  <StyledTableCell align="center">active</StyledTableCell>
                </StyledTableRow>
                <StyledTableRow>
                  <StyledTableCell component="th" scope="row">
                    <AddBoxIcon sx={{ color: "blue", opacity: 15 }} />
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <ExpandCircleDownIcon sx={{ color: "blue" }} />
                  </StyledTableCell>
                  <StyledTableCell align="center">AD185</StyledTableCell>
                  <StyledTableCell align="center">Ayush</StyledTableCell>
                  <StyledTableCell align="center">
                    demo (ADM133)
                  </StyledTableCell>
                  <StyledTableCell align="center">9189035573</StyledTableCell>
                  <StyledTableCell align="center">03-07-24</StyledTableCell>
                  <StyledTableCell align="center">Ayush@12454</StyledTableCell>
                  <StyledTableCell align="center">10</StyledTableCell>
                  <StyledTableCell align="center">10</StyledTableCell>
                  <StyledTableCell align="center">NOC</StyledTableCell>
                  <StyledTableCell align="center">0.0</StyledTableCell>
                  <StyledTableCell align="center">0.0</StyledTableCell>
                  <StyledTableCell align="center">0.0</StyledTableCell>
                  <StyledTableCell align="center">inactive</StyledTableCell>
                </StyledTableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </Card>
    </div>
  );
};
