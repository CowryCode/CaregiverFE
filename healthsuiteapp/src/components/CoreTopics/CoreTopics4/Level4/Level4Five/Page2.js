import React, {useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";
import UpdateLibraryLastPage from "../../../../../apicall/UpdateLibraryLastPage";

const Page2 = () => {
  const navigate = useNavigate();

  // const handleNext = () => {
  //   navigate("/next-page"); // Adjust this path to the next page
  // };

  const handlePrevious = () => {
    navigate("/library/core-topic4/level4/level4five/page1"); // Adjust this path to go back to the first page of this topic
  };

  useEffect(() => {
    savePageUrl();
    console.log(`Paged saved successfully : ${successful}` )
  }, []);

const { successful, savePageUrl } = UpdateLibraryLastPage({
      setLoading: (loading) => console.log(`Loading: ${loading}`),
      handleLibraryClick: (data) => {
          console.log('Library Clicked:', data);
      },
});

  return (
    <Box
      sx={{
        p: 3,
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        justifyContent: "space-between",
      }}
    >
      <Typography variant="h4" sx={{ mb: 1, textAlign: "center" }}>
        Level 4.5: Discussing Medications
      </Typography>
      <Typography variant="h6" sx={{ mb: 2 }}>
        Page 2 of 2
      </Typography>
      <Typography variant="h6" sx={{ mb: 2 }}>
        When consulting a doctor or pharmacist, ask:{" "}
      </Typography>
      <ul>
        <li>Why this medication? </li>
        <li>How does it work?</li>
        <li>How to assess its effectiveness?</li>
        <li>Best Time to Take it?</li>
        <li>How Often?</li>
        <li>If a dose is missed, what's the Plan?</li>
        <li>What are the side effects?</li>
        <li>Can I have information about this medication?</li>
        <li>How do we take it?</li>
        <li>Can it be crushed, dissolved, or taken with other meds?</li>
        <li>How should we store it? Can it be blister-packed?</li>
      </ul>
      <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
        <Button variant="contained" onClick={handlePrevious}>
          Previous
        </Button>
        <Typography sx={{ fontSize: '0.875rem' }}>Page 2</Typography>
        <Button variant="contained" disabled>
          Next
        </Button>
      </Box>
    </Box>
  );
};

export default Page2;
