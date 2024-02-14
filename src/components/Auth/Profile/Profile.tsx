"use client";
import { Button } from "@mui/material";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";

function Profile() {
  const { data } = useSession();
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
      <div style={{ margin: "7vh 15vw", maxWidth: "350px" }}>
        <h3>Name : {data?.user?.name}</h3>
        <h3>Email : {data?.user?.email}</h3>
        <div>
          <Button
            onClick={() => signOut()}
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
            Sign Out
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
