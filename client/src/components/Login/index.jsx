import React, { useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import axios from "axios";
import {
  Avatar,
  Button,
  TextField,
  Grid,
  Box,
  Container,
  Typography,
  styled,
  OutlinedInput
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
// import NavBar from '../components/NavBar';
import NavBar from "../NavBar";
import "./index.scss";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const validation = () => {
    if (!email) {
      return setError("A email is required");
    }
    if (!password) {
      return setError("A password is required");
    }
    // clears errors messages
    setError("");
    loginUser(email, password);
  };

  const loginUser = (email, password) => {
    const user = {
      email: email,
      password: password,
    };

    axios
      .post("/login", user)
      .then((res) => {
        if (res.data) {
          localStorage.setItem("user", JSON.stringify(res.data));
          navigate("/");
        } else {
          setError("Wrong password");
        }
      })
      .catch(() => setError("Not a registered email"));
  };

  // Custom theme for textfield inputs
  const PasswordInput = styled(TextField)({
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'white'
      },
      '&:hover fieldset': {
        borderColor: 'white'
      },
      '&.Mui-focused fieldset': {
        borderColor: 'white'
      }
    },
    '& input:valid:focus + fieldset': {
      borderColor: 'white'
    }
  })

  return (
    <div id="container_login">
      <NavBar />
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "red" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography variant="h5">Login Page</Typography>
          <br />
          <Typography
            sx={{ fontSize: 16, color: "red" }}
            className="user_validation"
          >
            {error}
          </Typography>
          <br />
          <Box component="form" onSubmit={(e) => e.preventDefault()}>
            <OutlinedInput
            className="email_input"
              fullWidth
              required
              sx={{ color: 'white', bgcolor: 'transparent' }}
              // label="Email"
              type="text"
              value={email}
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            {/* <PasswordInput id="password_input" fullWidth required
            sx={{ color: 'white' }}
              label="Password"
              type="password"
              value={password}
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)} /> */}
            <OutlinedInput
              fullWidth
              required
              sx={{ color: 'white' }}
              // label="Password"
              type="password"
              value={password}
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              type="submit"
              onClick={validation}
            >
              Login
            </Button>
            <Grid>
              <Link id="to_register" to="/register">
                Don't have an account yet? Sign up
              </Link>
            </Grid>
          </Box>
        </Box>
      </Container>
    </div>
  );
}
