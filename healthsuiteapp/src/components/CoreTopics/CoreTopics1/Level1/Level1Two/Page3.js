import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableRow,
  TableContainer,
  Paper,
} from "@mui/material";

const Page3 = () => {
  const navigate = useNavigate();

  const handlePrevious = () => {
    navigate("/library/core-topic1/level1/level1Two/page2");
  };

  const handleNext = () => {
    navigate("/library/core-topic1/level2")
  }

  return (
    <Box
      sx={{
        p: 3,
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        justifyContent: "space-between",
        backgroundColor: "#f3f3f3", // Adjust the background color as needed
      }}
    >
      <Box>
        <Typography
          variant="h2"
          sx={{
            mb: 2,
            fontSize: "1.5rem",
            color: "#007FFF",
            textAlign: "center",
          }}
        >
          Level 1.2: Taking a Break from Caregiving
        </Typography>
        <Typography variant="h3" sx={{ mb: 1, fontSize: "1.25rem" }}>
          Page 3 of 3
        </Typography>
        <TableContainer component={Paper} sx={{ boxShadow: 1 }}>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell
                  sx={{
                    width: "50%",
                    verticalAlign: "top",
                    borderRight: "2px solid black",
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      fontSize: "1rem",
                      fontWeight: "bold",
                      color: "black",
                    }}
                  >
                    Try
                  </Typography>
                  <ul>
                    <li>
                      Walking away from the situation for 5-10 minutes if it is
                      safe to do so.
                    </li>
                    <li>Taking a few slow, deep breaths.</li>
                    <li>Acknowledging how and what you are feeling.</li>
                    <li>
                      Sharing your feelings and frustrations with others and
                      asking for help.
                    </li>
                    <li>
                      Accessing formal support or joining a support group.
                    </li>
                    <li>
                      Reflect on what makes you happy; try to find ways to
                      engage in those activities.
                    </li>
                    <li>Speaking with your family physician.</li>
                  </ul>
                </TableCell>
                <TableCell sx={{ width: "50%", verticalAlign: "top" }}>
                  <Typography
                    variant="h6"
                    sx={{
                      fontSize: "1rem",
                      fontWeight: "bold",
                      color: "black",
                    }}
                  >
                    Avoid
                  </Typography>
                  <ul>
                    <li>Isolating yourself from others.</li>
                    <li>
                      Feeling guilty about asking for or accepting help from
                      others.
                    </li>
                    <li>Feeling guilty about taking time for yourself.</li>
                  </ul>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <Typography sx={{ mt: 2, fontSize: "0.875rem", textAlign: "center" }}>
          (Word count: 68)
        </Typography>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
        <Button variant="contained" onClick={handlePrevious}>
          Previous
        </Button>
        <Typography sx={{ fontSize: "0.875rem", alignSelf: "center" }}>
          Page 3
        </Typography>
        <Button variant="contained" onClick={handleNext}>
          Next
        </Button>{" "}
        {/* No next page, disable or remove as necessary */}
      </Box>
    </Box>
  );
};

export default Page3;
