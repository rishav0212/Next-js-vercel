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

const AppBar = styled(MuiAppBar)`
  background-color: rgba(255, 255, 255);
  background-image: none;
  /* Add your custom styles here */
`;

const StyledLink = styled('div')({
  textDecoration: "none",
  color: "black",
  fontSize: "16px",
  fontWeight: "600",
  paddingLeft: "20px",
  paddingTop: "5px",
  paddingRight: "20px",
  textAlign: "center",
  justifyContent: "center",
  transition: ".3s",
  "&:hover": {
    textDecoration: "underline",
  },
});

const Navbar = () => {
  // const classes = useStyles();
  // const theme = useTheme();
  const isMobile = useMediaQuery(`(max-width: 950px)`);
  const [openDrawer, setOpenDrawer] = useState(false);

  // const location = useLocation();

  // const url = (window.location.href).split('/')[3];
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
              <Search />

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
                    <Link
                      href="/"
                      className={`navbar-links border-bottom-class ${
                        url === "/" ? "active-link" : ""
                      }`}
                    >
                      Home
                    </Link>
                    <Link
                      href="/about"
                      className={`navbar-links border-bottom-class ${
                        url === "/about" ? "active-link" : ""
                      }`}
                    >
                      About
                    </Link>

                    <div className="dropdown1">
                      <span
                        className={`navbar-links border-bottom-class ${
                          url === "/manufacturing-unit" ? "active-link" : ""
                        }`}
                      >
                        Manufacturing Unit
                      </span>
                      <div className="dropdown-content">
                        <Link href="/manufacturing-unit/saar-biotech">
                          <StyledLink>
                            <span>Saar Biotech</span>
                          </StyledLink>
                        </Link>
                        <Divider />
                        <Link href="/manufacturing-unit/dm-pharma">
                          <StyledLink>
                            <span>DM Pharma</span>
                          </StyledLink>
                        </Link>
                        <Divider />
                        <Link href="/manufacturing-unit/dm-pharma">
                          <StyledLink>
                            <span>Infrastructure</span>
                          </StyledLink>
                        </Link>
                        <Divider />
                        <Link href="/manufacturing-unit/dm-pharma">
                          <StyledLink>
                            <span>Factory Video</span>
                          </StyledLink>
                        </Link>
                      </div>
                    </div>

                    <div className="dropdown1">
                      <Link
                        href="/products"
                        className={`navbar-links border-bottom-class ${
                          url === "/products" ? "active-link" : ""
                        }`}
                      >
                        Products
                      </Link>
                      <div className="dropdown-content">
                        <Link href="/products/suspensions">
                          <StyledLink>
                            <span>Suspensions</span>
                          </StyledLink>
                        </Link>
                        <Divider />
                        <Link href="/products/syrups">
                          <StyledLink>
                            <span>Syrups</span>
                          </StyledLink>
                        </Link>
                        <Divider />
                        <Link href="/products/external">
                          <StyledLink>
                            <span>External Preparation</span>
                          </StyledLink>
                        </Link>
                        <Divider />
                        <Link href="/products/misc">
                          <StyledLink>
                            <span>Miscellaneous Products</span>
                          </StyledLink>
                        </Link>
                        <Divider />
                        <Link href="/products/tablets">
                          <StyledLink>
                            <span>Tablets</span>
                          </StyledLink>
                        </Link>
                        <Divider />
                        <Link href="/products/capsules">
                          <span>Capsules</span>
                        </Link>
                        <Divider />
                        <Link href="/products/sachets">
                          <StyledLink>
                            {" "}
                            <span>Sachets</span>
                          </StyledLink>
                        </Link>
                      </div>
                    </div>

                    <div className="dropdown1">
                      <span
                        className={`navbar-links border-bottom-class ${
                          url === "/events" ? "active-link" : ""
                        }`}
                      >
                        Events
                      </span>
                      <div className="dropdown-content">
                        <Link href="/events/b2b">
                          <StyledLink>
                            {" "}
                            <span>B2B</span>
                          </StyledLink>
                        </Link>
                        <Divider />
                        <Link href="/events/pharma-south-2014">
                          <StyledLink>
                            {" "}
                            <span>Pharma South 2014</span>
                          </StyledLink>
                        </Link>
                        <Divider />
                        <Link href="/events/indian-pharma-expo-2013">
                          <StyledLink>
                            {" "}
                            <span>Indian Pharma Expo 2013</span>
                          </StyledLink>
                        </Link>
                        <Divider />
                        <Link href="/events/indian-pharma-expo-2012">
                          <StyledLink>
                            {" "}
                            <span>Indian Pharma Expo 2012</span>
                          </StyledLink>
                        </Link>
                        <Divider />
                        <Link href="/events/brochure">
                          <StyledLink>
                            {" "}
                            <span>Brochure</span>
                          </StyledLink>
                        </Link>
                      </div>
                    </div> 
                  </Stack>
                  <Link href="/contact" className="navbar-contact">
                    Contact
                  </Link>
                </Stack>
                <Search />
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
                  <List component="div" disablePadding>
                    <ListItem className="text-center justify-content-center">
                      <Link
                        href="/manufacturing-unit/saar-biotech"
                        className="navbar-dropdown-links"
                      >
                        <ListItemText primary="Saar Biotech" />
                      </Link>
                    </ListItem>
                    <Divider />
                    <ListItem className="text-center justify-content-center">
                      <Link
                        href="/manufacturing-unit/dm-pharma"
                        className="navbar-dropdown-links"
                      >
                        <ListItemText primary="DM Pharma" />
                      </Link>
                    </ListItem>
                    <Divider />
                    <ListItem className="text-center justify-content-center">
                      <Link
                        href="/manufacturing-unit/infrastructure"
                        className="navbar-dropdown-links"
                      >
                        <ListItemText primary="Infrastructure" />
                      </Link>
                    </ListItem>
                    <Divider />
                    <ListItem className="text-center justify-content-center">
                      <Link
                        href="/manufacturing-unit/factory-video"
                        className="navbar-dropdown-links"
                      >
                        <ListItemText primary="Factory Video" />
                      </Link>
                    </ListItem>
                  </List>
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
                  <List component="div" disablePadding>
                    <ListItem className="text-center justify-content-center">
                      <Link
                        href="/products/suspensions"
                        className="navbar-dropdown-links"
                      >
                        <ListItemText primary="Suspensions" />
                      </Link>
                    </ListItem>
                    <Divider />
                    <ListItem className="text-center justify-content-center">
                      <Link
                        href="/products/syrups"
                        className="navbar-dropdown-links"
                      >
                        <ListItemText primary="Syrups" />
                      </Link>
                    </ListItem>
                    <Divider />
                    <ListItem className="text-center justify-content-center">
                      <Link
                        href="/products/external-preparation"
                        className="navbar-dropdown-links"
                      >
                        <ListItemText primary="External Preparation" />
                      </Link>
                    </ListItem>
                    <Divider />
                    <ListItem className="text-center justify-content-center">
                      <Link
                        href="/products/misc-products"
                        className="navbar-dropdown-links"
                      >
                        <ListItemText primary="Miscellaneous products" />
                      </Link>
                    </ListItem>
                    <Divider />
                    <ListItem className="text-center justify-content-center">
                      <Link
                        href="/products/tablets"
                        className="navbar-dropdown-links"
                      >
                        <ListItemText primary="Tablets" />
                      </Link>
                    </ListItem>
                    <Divider />
                    <ListItem className="text-center justify-content-center">
                      <Link
                        href="/products/capsules"
                        className="navbar-dropdown-links"
                      >
                        <ListItemText primary="Capsules" />
                      </Link>
                    </ListItem>
                    <Divider />
                    <ListItem className="text-center justify-content-center">
                      <Link
                        href="/products/sachets"
                        className="navbar-dropdown-links"
                      >
                        <ListItemText primary="Sachets" />
                      </Link>
                    </ListItem>
                  </List>
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
                  <List component="div" disablePadding>
                    <ListItem className="text-center justify-content-center">
                      <Link
                        href="/events/b2b"
                        className="navbar-dropdown-links"
                      >
                        <ListItemText primary="B2B" />
                      </Link>
                    </ListItem>
                    <Divider />
                    <ListItem className="text-center justify-content-center">
                      <Link
                        href="/events/pharma-south-2014"
                        className="navbar-dropdown-links"
                      >
                        <ListItemText primary="Pharma South 2014" />
                      </Link>
                    </ListItem>
                    <Divider />
                    <ListItem className="text-center justify-content-center">
                      <Link
                        href="/events/indian-pharma-expo-2013"
                        className="navbar-dropdown-links"
                      >
                        <ListItemText primary="Indian Pharma Expo 2013" />
                      </Link>
                    </ListItem>
                    <Divider />
                    <ListItem className="text-center justify-content-center">
                      <Link
                        href="/events/indian-pharma-expo-2012"
                        className="navbar-dropdown-links"
                      >
                        <ListItemText primary="Indian Pharma Expo 2012" />
                      </Link>
                    </ListItem>
                    <Divider />
                    <ListItem className="text-center justify-content-center">
                      <Link
                        href="/events/brochure"
                        className="navbar-dropdown-links"
                      >
                        <ListItemText primary="Brochure" />
                      </Link>
                    </ListItem>
                  </List>
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
