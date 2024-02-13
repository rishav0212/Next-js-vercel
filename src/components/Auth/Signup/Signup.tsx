"use client";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import LoginIcon from "@mui/icons-material/Login";
import GoogleIcon from "@mui/icons-material/Google";
import { VisibilityOff, Visibility } from "@mui/icons-material";
import { TextField, IconButton, InputAdornment, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { useSession } from "next-auth/react";

function Signup() {
  const { data: session } = useSession();
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  useEffect(()=>{
    session?.user? router.push("/profile"):null
  })

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

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await fetch("api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      console.log("Form submitted with data:", formData);
      // const response = await res.json();
      console.log(res);
      if (res.ok) {
        const res = await signIn("credentials", {
          ...formData,
          redirect: false,
        });
        console.log("Form submitted with data:", formData);
        router.replace("profile");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setFormData({ name: "", email: "", password: "" });
    }
  };

  return (
    <div
      style={{
        justifyContent: "center",
        width: "100%",
        height: "100vh",
        display: "flex",
        background: "linear-gradient(45deg, #E8EBef 20%, #FDFDFD 80%)",
      }}
    >
      <div style={{ margin: "4vh 15vw", maxWidth: "350px" }}>
        <img
          src="/LogoAqua.png"
          alt="Logo Saar Biotech"
          style={{ marginInline: "15%", width: "70%" }}
        />
        <div
          style={{
            margin: 20,
            background: "#FFFFFF",
            padding: "2em",
            borderRadius: "15px",
            boxShadow: "0 10px 20px 2px rgba(0, 0, 0, 0.3)",
            transition: "box-shadow 0.3s ease-in-out",
            textAlign: "center",
          }}
        >
          <div>
            <Link href={"/"} style={{ fontSize: "1.2em", float: "left" }}>
              <ExitToAppIcon
                sx={{ fontSize: "1.2em", transform: "scalex(-1)" }}
              />
              <span>Home</span>
            </Link>
            <Link href={"/login"} style={{ fontSize: "1.2em", float: "right" }}>
              <span>Login</span>
              <LoginIcon sx={{ fontSize: "1.2em" }} />
            </Link>
          </div>
          <h3 style={{ color: "#6F7E8C", marginTop: 25 }}>Sign Up</h3>
          <div style={{ margin: 10 }}>
            <Button
              onClick={() => signIn("google")}
              sx={{
                background: "#3cb6a0",
                color: "#fff",
                transition:
                  "background-color 0.3s ease-in-out transform 0.3s ease-in-out",
                ":hover": {
                  background: "#3cbfb6",
                  transform: "scale(1.01)",
                },
              }}
            >
              <GoogleIcon />
              <span className="mx-2">Continue with Google</span>
            </Button>
            <br />
            <span style={{ fontSize: "1.5em" }}>Or</span>
          </div>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              variant="outlined"
              sx={{
                "& label.Mui-focused": {
                  color: "#6F7E8C",
                },
                "& .MuiInput-underline:after": {
                  borderBottomColor: "#6F7E8C",
                },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#B2BAC2",
                  },
                  "&:hover fieldset": {
                    borderColor: "#6F7E8C",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#6F7E8C",
                  },
                },
                background: "linear-gradient(180deg, #FFFFFF 0%, #F0F0FF 100%)",
                borderRadius: "8px",
                marginBottom: "0.5em",
              }}
            />
            <TextField
              label="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              variant="outlined"
              sx={{
                "& label.Mui-focused": {
                  color: "#6F7E8C",
                },
                "& .MuiInput-underline:after": {
                  borderBottomColor: "#6F7E8C",
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
                marginBottom: "0.5em",
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
                marginBottom: "0.5em",
              }}
            />
            <Button
              type="submit"
              variant="contained"
              sx={{
                backgroundColor: "#3cb6a0",
                color: "#ffffff",
                borderRadius: "4px",
                padding: "0.5rem 1rem",
                marginTop: "1em",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                textTransform: "none",
                transition:
                  "background-color 0.3s ease-in-out transform 0.3s ease-in-out",
                ":hover": {
                  background: "#3cbfb6",
                  transform: "scale(1.01)",
                },
              }}
            >
              Sign up
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
