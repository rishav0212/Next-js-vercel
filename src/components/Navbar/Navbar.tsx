"use client";
import React from "react";
import { styled } from "@mui/system";
import {
  AppBar as MuiAppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  /*useTheme, */ useMediaQuery,
  Stack,
  ListItemButton,
  Container,
  Tooltip,
  Typography,
  Divider,
  Collapse,
} from "@mui/material";
import { useState } from "react";
import SegmentSharpIcon from "@mui/icons-material/SegmentSharp";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import Link from "next/link";
// import { makeStyles } from '@mui/styles';
//import MenuIcon from '@mui/icons-material/Menu';
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Search from "./Search";
import { useRouter } from "next/router";
import { usePathname } from "next/navigation";
import Dropdown from "./dropdown";
import DrawerItem from "./DrawerItems";



const AppBar = styled(MuiAppBar)`
  background-color: rgba(255, 255, 255);
  background-image: none;
  /* Add your custom styles here */
`;


const Navbar = () => {
  // const classes = useStyles();
  // const theme = useTheme();
  const isMobile = useMediaQuery(`(max-width: 950px)`);
  const [openDrawer, setOpenDrawer] = useState(false);
  
  const path = usePathname()
  const url = path.slice(0, path.indexOf('/', 1)!==-1?path.indexOf('/',1):path.length)

  // console.log(path.indexOf('/', 1))

  const toggleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };

  const [manufacturingUnitOpen, setManufacturingUnitOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [eventsOpen, setEventsOpen] = useState(false);

  const handleManufacturingUnitChange = () => {
    setManufacturingUnitOpen(!manufacturingUnitOpen);
    setEventsOpen(false);
    setProductsOpen(false);
  };

  const handleProductsChange = () => {
    setProductsOpen(!productsOpen);
    setManufacturingUnitOpen(false);
    setEventsOpen(false);
  };

  const handleEventsChange = () => {
    setEventsOpen(!eventsOpen);
    setManufacturingUnitOpen(false);
    setProductsOpen(false);
  };


  const units_menu = {
    menu_name :"Manufacturing Unit", 
    to: "/manufacturing-unit", 
    items :{
      'Saar Biotech' : "/saar-biotech",
      'DM Pharma' : "/dm-pharma",
      'Infrastructure' : "/dm-pharma",
      'Factory Video' : "/dm-pharma"
    }}
  
  const products_menu = {
    menu_name :"Products", 
    to: "/products", 
    items :{
      'Suspensions' : "/Suspensions",
      'Syrups' : "/Syrups",
      'External Preparation' : "/External Preparation",
      'Miscellaneous Products' : "/Miscellaneous Products",
      'Tablets' : "/Tablets",
      'Capsules': "/Capsules",
      'Sachets' : "/Sachets"
    }}

  const events_menu = {
    menu_name :"Events", 
    to: "/events", 
    items :{
      'B2B' : "/b2b",
      'Pharma South 2014' : "/pharma-south-2014",
      'Indian Pharma Expo 2013' : "/indian-pharma-expo-2013",
      'Indian Pharma Expo 2012' : "/indian-pharma-expo-2012",
      'Brochure': "/brochure",
    }}

  return (
    <>
      <AppBar position="relative">
        <Toolbar>
          {isMobile ? (
            <>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                <Link href="/">
                  <img
                    src="/images/logo.png"
                    alt="Recode7"
                    width="200"
                    height="20"
                    style={{
                      display: "flex",
                      marginLeft: "auto",
                      marginRight: "auto",
                    }}
                  />
                </Link>
              </Typography>

              {/* {url!=="/products" ?<Search query=""/>:null} */}

              <IconButton edge="end" onClick={toggleDrawer}>
                <SegmentSharpIcon fontSize="large" style={{ color: "black" }} />
              </IconButton>
            </>
          ) : (
            <>
              <Stack
                spacing={2}
                direction={"row"}
                alignItems={"center"}
                justifyContent={"space-between"}
                sx={{
                  width: "100%",
                }}
              >
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  <Link href="/">
                    <img
                      src="/images/logo.png"
                      alt="Recode7"
                      width="220"
                      height="22"
                      style={{
                        marginLeft: "40px",
                      }}
                    />
                  </Link>
                </Typography>

                <Stack
                  spacing={2}
                  direction={"row"}
                  alignItems={"center"}
                  justifyContent={"center"}
                >
                  <Stack
                    direction={"row"}
                    alignItems={"center"}
                    justifyContent={"center"}
                  >
                    
                    < Dropdown props={{menu_name:"Home", to:"/", items:{}}} url = {url} />
                    < Dropdown props={{menu_name:"About", to:"/about", items:{}}} url= {url}  />
                    < Dropdown props = {units_menu} url= {url}  />
                    < Dropdown props = {products_menu} url= {url} />
                    < Dropdown props = {events_menu} url= {url} />

                  </Stack>
                  <Link href="/contact" className="navbar-contact">
                    Contact
                  </Link>
                </Stack>
                {/* {url!=="/products"?<Search query=""/>:null} */}
                
              </Stack>
            </>
          )}
        </Toolbar>
      </AppBar>
      <Drawer
        variant="temporary"
        anchor="left"
        open={openDrawer}
        onClose={toggleDrawer}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", sm: "block", md: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: "245px" },
        }}
      >
        <Stack
          direction="column"
          justifyContent="space-between"
          spacing={5}
          sx={{ height: "100%" }}
        >
          <Stack>
            <Tooltip title="Hide Navbar" placement="left">
              <IconButton onClick={toggleDrawer} sx={{ alignSelf: "flex-end" }}>
                <NavigateBeforeIcon fontSize="large" />
              </IconButton>
            </Tooltip>
            <Container>
              <List>
                <ListItem>
                  <Link
                    href={"/"}
                    onClick={toggleDrawer}
                    className={`navbar-links ${
                      url === "/" ? "active-link" : ""
                    }`}
                  >
                    <ListItemButton>
                      <ListItemText
                        primary={
                          <span style={{ fontWeight: "500" }}>Home</span>
                        }
                      />
                    </ListItemButton>
                  </Link>
                </ListItem>
                <ListItem>
                  <Link
                    href={"/about"}
                    onClick={toggleDrawer}
                    className={`navbar-links ${
                      url === "/about" ? "active-link" : ""
                    }`}
                  >
                    <ListItemButton>
                      <ListItemText
                        primary={
                          <span style={{ fontWeight: "500" }}>About</span>
                        }
                      />
                    </ListItemButton>
                  </Link>
                </ListItem>
                <ListItem onClick={handleManufacturingUnitChange}>
                  <span
                    className={`navbar-links d-flex  ${
                      url === "/manufacturing-unit" ? "active-link" : ""
                    }`}
                  >
                    <ListItemButton>
                      <ListItemText
                        primary={
                          <span style={{ fontWeight: "500" }}>
                            Manufacturing Unit
                          </span>
                        }
                      />
                    </ListItemButton>
                    <span style={{ display: "flex", alignItems: "center" }}>
                      {manufacturingUnitOpen ? <RemoveIcon /> : <AddIcon />}
                    </span>
                  </span>
                </ListItem>

                <Collapse
                  in={manufacturingUnitOpen}
                  timeout="auto"
                  unmountOnExit
                  sx={{
                    backgroundColor: "#EF3E00",
                    color: "white",
                    fontWeight: "500",
                  }}
                >
                  < DrawerItem props = {units_menu} onclick = {toggleDrawer} />

                </Collapse>

                <ListItem onClick={handleProductsChange}>
                  <span
                    className={`navbar-links d-flex align-center ${
                      url === "/products" ? "active-link" : ""
                    }`}
                  >
                    <ListItemButton>
                      <ListItemText
                        primary={
                          <span style={{ fontWeight: "500" }}>Products</span>
                        }
                      />
                    </ListItemButton>
                    <span style={{ display: "flex", alignItems: "center" }}>
                      {productsOpen ? <RemoveIcon /> : <AddIcon />}
                    </span>
                  </span>
                </ListItem>

                <Collapse
                  in={productsOpen}
                  timeout="auto"
                  unmountOnExit
                  sx={{
                    backgroundColor: "#EF3E00",
                    color: "white",
                    fontWeight: "500",
                  }}
                >
                  < DrawerItem props = {products_menu} onclick = {toggleDrawer}/>

                </Collapse>

                <ListItem onClick={handleEventsChange}>
                  <span
                    className={`navbar-links d-flex align-center ${
                      url === "/events" ? "active-link" : ""
                    }`}
                  >
                    <ListItemButton>
                      <ListItemText
                        primary={
                          <span style={{ fontWeight: "500" }}>Events</span>
                        }
                      />
                    </ListItemButton>
                    <span style={{ display: "flex", alignItems: "center" }}>
                      {eventsOpen ? <RemoveIcon /> : <AddIcon />}
                    </span>
                  </span>
                </ListItem>

                <Collapse
                  in={eventsOpen}
                  timeout="auto"
                  unmountOnExit
                  sx={{
                    backgroundColor: "#EF3E00",
                    color: "white",
                    fontWeight: "500",
                  }}
                >
                  < DrawerItem props = {events_menu} onclick = {toggleDrawer} />

                </Collapse>

                <ListItem>
                  <Link
                    href={"/contact"}
                    className={`navbar-links ${
                      url === "/contact" ? "active-link" : ""
                    }`}
                  >
                    <ListItemButton>
                      <ListItemText
                        primary={
                          <span style={{ fontWeight: "500" }}>Contact</span>
                        }
                      />
                    </ListItemButton>
                  </Link>
                </ListItem>
              </List>
            </Container>
          </Stack>
        </Stack>
      </Drawer>
    </>
  );
};

export default Navbar;
