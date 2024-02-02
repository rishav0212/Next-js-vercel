"use client";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import SegmentSharpIcon from "@mui/icons-material/SegmentSharp";
import {
  Collapse,
  Container,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  AppBar as MuiAppBar,
  Stack,
  Toolbar,
  Tooltip,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Link from "next/link";
import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import SearchIcon from "@mui/icons-material/Search";
import { usePathname } from "next/navigation";
import DrawerItem from "./DrawerItems";
import Dropdown from "./dropdown";

const Navbar = () => {
  const isMobile = useMediaQuery(`(max-width: 950px)`);
  const [openDrawer, setOpenDrawer] = useState(false);

  const path = usePathname();
  const url = path.slice(
    0,
    path.indexOf("/", 1) !== -1 ? path.indexOf("/", 1) : path.length
  );

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

  const navMenu = {
    menus: [
      {
        menu_name: "Home",
        to: "/",
      },
      {
        menu_name: "About",
        to: "/about",
      },
      {
        menu_name: "Manufacturing Unit",
        to: "/manufacturing-unit",
        items: {
          "Saar Biotech": "/saar-biotech",
          "DM Pharma": "/dm-pharma",
          Infrastructure: "/dm-pharma",
          "Factory Video": "/dm-pharma",
        },
        onClickMethod: handleManufacturingUnitChange,
        stateVar: manufacturingUnitOpen,
      },
      {
        menu_name: "Products",
        to: "/products",
        items: {
          Suspensions: "/Suspensions",
          Syrups: "/Syrups",
          "External Preparation": "/External Preparations",
          "Miscellaneous Products": "/Miscellaneous Products",
          Tablets: "/Tablets",
          Capsules: "/Capsules",
          Sachets: "/Sachets",
        },
        onClickMethod: handleProductsChange,
        stateVar: productsOpen,
      },
      {
        menu_name: "Events",
        to: "/events",
        items: {
          B2B: "/b2b",
          "Pharma South 2014": "/pharma-south-2014",
          "Indian Pharma Expo 2013": "/indian-pharma-expo-2013",
          "Indian Pharma Expo 2012": "/indian-pharma-expo-2012",
          Brochure: "/brochure",
        },
        onClickMethod: handleEventsChange,
        stateVar: eventsOpen,
      },
    ],
  };

  return (
    <>
      <MuiAppBar
        sx={{
          backgroundColor: "rgba(255, 255, 255)",
          backgroundImage: "none",
          // position: "-webkit-sticky",
          position: "sticky",
          // height:{xs:"6vh",sm:"9vh" , md:"9vh"} ,
          top: 0,
        }}
      >
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
              <Link href="/products">
                <IconButton title="See Products">
                  <SearchIcon fontSize="medium" style={{ color: "black" }} />
                </IconButton>
              </Link>
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
                    {Object.keys(navMenu.menus).map((key) => (
                      <React.Fragment key={key}>
                        <Dropdown props={navMenu.menus[key]} url={url} />
                      </React.Fragment>
                    ))}
                  </Stack>
                  <Link href="/contact" className="navbar-contact">
                    Contact
                  </Link>
                </Stack>
              </Stack>
            </>
          )}
        </Toolbar>
      </MuiAppBar>
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
                {Object.keys(navMenu.menus).map((key) => (
                  <React.Fragment key={key}>
                    {navMenu.menus[key].items === undefined ? (
                      <ListItem>
                        <Link
                          href={navMenu.menus[key].to}
                          onClick={toggleDrawer}
                          className={`navbar-links ${
                            url === navMenu.menus[key].to ? "active-link" : ""
                          }`}
                        >
                          <ListItemButton>
                            <ListItemText
                              primary={
                                <span style={{ fontWeight: "500" }}>
                                  {navMenu.menus[key].menu_name}
                                </span>
                              }
                            />
                          </ListItemButton>
                        </Link>
                      </ListItem>
                    ) : (
                      <>
                        <ListItem onClick={navMenu.menus[key].onClickMethod}>
                          <span
                            className={`navbar-links d-flex  ${
                              url === navMenu.menus[key].to ? "active-link" : ""
                            }`}
                          >
                            <ListItemButton>
                              <ListItemText
                                primary={
                                  <span style={{ fontWeight: "500" }}>
                                    {navMenu.menus[key].menu_name}
                                  </span>
                                }
                              />
                            </ListItemButton>
                            <span
                              style={{ display: "flex", alignItems: "center" }}
                            >
                              {navMenu.menus[key].stateVar ? (
                                <RemoveIcon />
                              ) : (
                                <AddIcon />
                              )}
                            </span>
                          </span>
                        </ListItem>
                        <Collapse
                          in={navMenu.menus[key].stateVar}
                          timeout={400}
                          unmountOnExit
                          sx={{
                            backgroundColor: "#EF3E00",
                            color: "white",
                            fontWeight: "500",
                          }}
                        >
                          <DrawerItem
                            props={navMenu.menus[key]}
                            onclick={toggleDrawer}
                          />
                        </Collapse>
                      </>
                    )}
                  </React.Fragment>
                ))}

                <ListItem>
                  <Link
                    href={"/contact"}
                    onClick={toggleDrawer}
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
