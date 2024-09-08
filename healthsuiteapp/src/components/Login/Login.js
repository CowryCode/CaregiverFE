import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Typography, Container, Box } from "@mui/material";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

import axiosInstance from '../../apicall/AxiosInstance';
import LoadingComponent from '../loader/LoadingComponent';
import LocalStorageService from "../../utils/LocalStorageService";
import { refreshQuickTips, getGoals , getBookMarks} from "../../utils/localStorageHelpers";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);


  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    console.log("Logging in with:", email, password);
    // navigate(`/baseline-questionnaire-f1`);
    // Add your login logic or call to API here
    submitToAPI();
  };

  const submitToAPI = () => {
    setLoading(true);
    const payload = {userName: email, passWord: password}
    axiosInstance.post('/caregiver/auth/v1/login-caregiver', payload) 
    .then(response => {
      LocalStorageService.setItem('token', response.data.token);
      LocalStorageService.setItem('profile', response.data.profile);
      LocalStorageService.setItem('libraryLastPage', response.data.profile.libraryLastScreen);
      refreshQuickTips(response.data.profile.quickTips);
      getGoals();
      getBookMarks();

      const needSequence = response.data.profile.needSequence;

      const needSequenceArray = JSON.parse(needSequence);

      const serializedValue = JSON.stringify(response.data.profile);
      console.log(serializedValue);

      if(needSequenceArray.length > 0 ){
        LocalStorageService.setArray('libraryorder', needSequenceArray);
        // const order =   needSequence.split(',');
        // LocalStorageService.setItem('libraryorder', needSequence);
      }

      
      navigate(`/`);
    })
    .catch(error => {
        alert(`Login unsuccessful  . . .`);
       // window.location.href = '/baseline-questionnaire-f1';
        console.error('Error', error);
    })
    .finally(() => {
      setLoading(false);
    });
  }

  return (
    <>
      <Header />
      <Container
        component="main"
        maxWidth="xs"
        sx={{
          display: "flex",
          flexDirection: "column",
        //   alignItems: "center",
        //   justifyContent: "center",
          minHeight: "70vh",
        }}
      >
      {!loading && (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Typography component="h1" variant="h5">
            Login Page
          </Typography>
          <Box
            component="form"
            onSubmit={handleLogin}
            noValidate
            sx={{ mt: 1, width: "100%" }}
          >
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Login
            </Button>
          </Box>
        </Box>
      )}
      {loading && (
      <div>
        <LoadingComponent/>
      </div>
      )}
      </Container>
      <Footer/>
    </>
  );
}

export default Login;
