"use client";
import { VisibilityOff, Visibility } from "@mui/icons-material";
import { TextField, IconButton, InputAdornment, Button } from "@mui/material";
import React, { useState } from "react";
import Link from "next/link";

function Login() {
  const [showPassword, setShowPassword] = React.useState(false);
  const [formData, setFormData] = useState({ username: "", password: "" });

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted with data:", formData);
    setFormData({ username: "", password: "" });
  };

  return (
    <div
      style={{
        justifyContent: "center",
        width: "100%",
        height: "100vh",
        display: "flex",
        background: "linear-gradient(45deg, #E8EBF0, #FDFDFD)", // Updated background with subtle gradient
      }}
    >
      <div style={{ margin: "10vh 15vw", maxWidth: "350px" }}>
        <img
          src="/LogoAqua.png"
          alt="Logo Saar Biotech"
          style={{ marginInline: "15%", width: "70%" }}
        />
        <div
          style={{
            margin: 20,
            background: "#FFFFFF", // Adjusted background color
            padding: "2em",
            borderRadius: "15px",
            boxShadow: "0 10px 20px 2px rgba(0, 0, 0, 0.3)", // Added box shadow
            transition: "box-shadow 0.3s ease-in-out", // Smooth transition for box shadow
          }}
        >
          <Link href={"/home"} style={{ fontSize: "1.2em" }}>
            <span>{"<- Go to Home"}</span>
          </Link>
          <h3 style={{ color: "#6F7E8C" }}>Login</h3>

          <form onSubmit={handleSubmit}>
            <TextField
              label="Username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              variant="outlined"
              sx={{
                "& label.Mui-focused": {
                  color: "#6F7E8C", // Adjusted label color when focused
                },
                "& .MuiInput-underline:after": {
                  borderBottomColor: "#6F7E8C", // Adjusted underline color after focus
                },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#B2BAC2", // Adjusted border color
                  },
                  "&:hover fieldset": {
                    borderColor: "#6F7E8C", // Adjusted border color on hover
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#6F7E8C", // Adjusted border color when focused
                  },
                },
                background: "linear-gradient(180deg, #FFFFFF 0%, #F0F0FF 100%)", // Added gradient background
                borderRadius: "8px",
                marginBottom: "1rem",
              }}
            />
            <TextField
              label="Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              variant="outlined"
              type={showPassword ? "text" : "password"}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              sx={{
                "& label.Mui-focused": {
                  color: "#6F7E8C", // Adjusted label color when focused
                },
                "& .MuiInput-underline:after": {
                  borderBottomColor: "#6F7E8C", // Adjusted underline color after focus
                },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#B2BAC2", // Adjusted border color
                  },
                  "&:hover fieldset": {
                    borderColor: "#6F7E8C", // Adjusted border color on hover
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#6F7E8C", // Adjusted border color when focused
                  },
                },
                background: "linear-gradient(180deg, #FFFFFF 0%, #F0F0FF 100%)", // Added gradient background
                borderRadius: "8px",
                marginBottom: "1rem",
              }}
            />
            <Button
              type="submit"
              variant="contained"
              sx={{
                backgroundColor: "#6F7E8C",
                color: "#ffffff",
                borderRadius: "4px",
                padding: "0.5rem 1rem",
                marginTop: "1rem",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", // Added box shadow
                textTransform: "none", // Prevents uppercase transformation
                transition: "background-color 0.3s ease-in-out", // Smooth transition for background color
              }}
            >
              Login
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
