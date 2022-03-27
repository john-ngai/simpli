import { React, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import {
  Grid,
  Box,
  Container,
  Avatar,
  Button,
  Typography,
  OutlinedInput,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import useAppData from "../../hooks/useAppData";
import NavBar from "../NavBar";
import "./index.scss"; // Temporary

export default function Register() {
  const { state } = useAppData();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [team, setTeam] = useState("");
  const [error, setError] = useState("");

  let navigate = useNavigate();

  const validation = () => {
    // check if all input fields have valid info from user, if not, error messages will be displayed
    if (!name) {
      setError("A name is required");
      return;
    }
    if (!email) {
      setError("An email is required");
      return;
    }
    if (!password) {
      setError("A password is required");
      return;
    }
    // resets setError to prev state and saves the registered user
    setError("");
    registerUser(name, email, password, team);
  };

  // POST /register
  const registerUser = (name, email, password, team) => {
    const user = { name, email, password, team };
    axios.post("/register", user).then((res) => {
      const error = res.data.error;
      switch (error) {
        case "registered email":
          return setError("Email already registered");
          break;
        case "invalid team":
          return setError(
            "Invalid team code - Leave blank to create a new team"
          );
          break;
      }
      localStorage.setItem("user", JSON.stringify(res.data));
      return navigate("/");
    });
  };

  return (
    <div id="container_register">
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
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography variant="h5">Registration Page</Typography>
          <br />
          <Typography
            sx={{ fontSize: 16, color: "red" }}
            className="user_validation"
          >
            {error}
          </Typography>
          <br />
          <Box component="form" onSubmit={(e) => e.preventDefault()}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                {/* <FormControl> */}
                <OutlinedInput
                sx={{ color: 'white', bgcolor: 'black' }}
                  // label="Name"
                  type="text"
                  value={name}
                  placeholder="Enter your full name"
                  required
                  fullWidth
                  onChange={(e) => setName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <OutlinedInput
                sx={{ color: 'white', bgcolor: 'black' }}
                  // label="Email"
                  type="text"
                  value={email}
                  placeholder="Enter email"
                  required
                  fullWidth
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <OutlinedInput
                sx={{ color: 'white', bgcolor: 'black' }}
                  // label="Password"
                  type="password"
                  value={password}
                  placeholder="Enter password"
                  required
                  fullWidth
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <OutlinedInput
                sx={{ color: 'white', bgcolor: 'black' }}
                  // label="Team"
                  type="text"
                  value={team}
                  placeholder="Enter team code"
                  required
                  fullWidth
                  onChange={(e) => setTeam(e.target.value)}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={validation}
            >
              Register
            </Button>
            {/* </FormControl> */}
            <Grid container justifyContent="flex-end">
              <Link id="to_login" to="/login">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Box>
        </Box>
      </Container>
    </div>
  );
}
