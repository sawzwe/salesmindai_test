// Nav.js
"use client";
import React, { useState, useEffect } from "react";
import NavigationSection from "./NavigationSection";
import { styled, useTheme } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import {
  Typography,
  Button,
  Divider,
  CssBaseline,
  Box,
  Avatar,
  Badge,
  IconButton,
} from "@mui/material";
import { useRouter } from "next/navigation";
import Image from "next/image";
import DashboardIcon from "@mui/icons-material/Dashboard";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import SettingsIcon from "@mui/icons-material/Settings";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";

export default function Nav() {
  const theme = useTheme();
  const [open, setOpen] = useState(true);
  const [elementsOpen, setElementsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("/");
  const [openItems, setOpenItems] = useState({});
  const router = useRouter();

  const activeInbox = 24;
  const activeProjects = 8;
  const activeTasks = 12;
  const activeChangelog = 1.05;

  const avatarPath = "/assets/profile_avatar.png";
  const salesmindai_logoPath = "/assets/salesmindaiLogo.png"

  useEffect(() => {
    setActiveLink(router.pathname);
  }, [router.pathname]);

  const handleItemClick = (label) => {
    setOpenItems((prevOpenItems) => ({
      ...prevOpenItems,
      [label]: !prevOpenItems[label],
    }));
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  const handleElementsClick = () => {
    setElementsOpen(!elementsOpen);
  };

  // App
  const navigationItems1 = [
    { label: "Dashboard", link: "/", icon: <DashboardIcon /> },
    {
      label: "Accounts",
      link: "#Accounts",
      icon: <MenuBookIcon />,
      children: [
        { label: "Account 1", link: "#Account1", icon: <MenuBookIcon /> },
        { label: "Account 2", link: "#Account2", icon: <MenuBookIcon /> },
      ],
    },
    { label: "Inbox", link: "/pages/inbox", icon: <MenuBookIcon /> },
  ];
  // Analytics
  const navigationItems2 = [
    {
      label: "Pages",
      link: "#Pages",
      icon: <MenuBookIcon />,
      children: [
        { label: "Page 1", link: "#Page1", icon: <MenuBookIcon /> },
        { label: "Page 2", link: "#Page2", icon: <MenuBookIcon /> },
      ],
    },
    { label: "Projects", link: "#Projects", icon: <MenuBookIcon /> },
    { label: "Orders", link: "#Orders", icon: <MenuBookIcon /> },
    { label: "Invoice", link: "#Invoice", icon: <MenuBookIcon /> },
    { label: "Tasks", link: "#Tasks", icon: <MenuBookIcon /> },
    { label: "Calendar", link: "#Calendar", icon: <MenuBookIcon /> },
    {
      label: "Auth",
      link: "#Auth",
      icon: <MenuBookIcon />,
      children: [
        { label: "Token", link: "#Token", icon: <MenuBookIcon /> },
        { label: "Session", link: "#Session", icon: <MenuBookIcon /> },
      ],
    },
  ];

  const navigationItems3 = [
    {
      label: "Components",
      link: "#Components",
      icon: <MenuBookIcon />,
      children: [
        {
          label: "Component 1",
          link: "#SubComponents1",
          icon: <MenuBookIcon />,
        },
      ],
    },
    {
      label: "Charts",
      link: "#Charts",
      icon: <MenuBookIcon />,
      children: [
        {
          label: "Pie Chart",
          link: "#PieChart",
          icon: <MenuBookIcon />,
        },
        {
          label: "Bar Chart",
          link: "#BarChart",
          icon: <MenuBookIcon />,
        },
      ],
    },

    {
      label: "Forms",
      link: "#Forms",
      icon: <MenuBookIcon />,
      children: [
        {
          label: "Forms 1",
          link: "#Forms1",
          icon: <MenuBookIcon />,
        },
      ],
    },
    {
      label: "Tables",
      link: "#Tables",
      icon: <MenuBookIcon />,
      children: [
        {
          label: "Tables 1",
          link: "#Tables1",
          icon: <MenuBookIcon />,
        },
      ],
    },
    {
      label: "Icons",
      link: "#Icons",
      icon: <MenuBookIcon />,
      children: [
        {
          label: "Icons 1",
          link: "#Icons",
          icon: <MenuBookIcon />,
        },
      ],
    },
    {
      label: "Maps",
      link: "#Maps",
      icon: <MenuBookIcon />,
      children: [
        {
          label: "Google Maps",
          link: "#GoogleMaps",
          icon: <MenuBookIcon />,
        },
      ],
    },
  ];

  // Docs
  const navigationItems4 = [
    { label: "Presentation", link: "#Presentation", icon: <MenuBookIcon /> },
    {
      label: "Getting Started",
      link: "#GettingStarted",
      icon: <MenuBookIcon />,
    },
    { label: "Changelog", link: "#Changelog", icon: <MenuBookIcon /> },
  ];

  const drawerWidth = 240;

  const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: "flex-start",
  }));

  const Drawer = styled(MuiDrawer, {
    shouldForwardProp: (prop) => prop !== "open",
  })(({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    boxSizing: "border-box",
    "& .MuiDrawer-paper": {
      backgroundColor: theme.palette.primary.main, // Set the drawer's background color to primary main
      color: "#FFF", // Optional: Set the text color to white if needed
      ...(open && openedMixin(theme)),
      ...(!open && closedMixin(theme)),
    },
  }));

  const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: "hidden",
  });

  const closedMixin = (theme) => ({
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up("sm")]: {
      width: `calc(${theme.spacing(8)} + 1px)`,
    },
  });

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <Drawer variant="permanent" open={open}>
          <DrawerHeader>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "5px",
              }}
            >
              <Image
                src={salesmindai_logoPath}
                alt="Logo"
                width={26.88}
                height={36.54}
              />
              <Typography variant="h6" sx={{ fontWeight: "bold", ml: "10px" }}>
                SalesMind
              </Typography>
              <Typography variant="h6">AI</Typography>
            </div>
          </DrawerHeader>
          <NavigationSection
            title="App"
            items={navigationItems1}
            open={open}
            handleClick={handleItemClick}
            handleLinkClick={handleLinkClick}
            openItems={openItems}
            activeLink={activeLink}
            theme={theme}
            inboxCount={activeInbox}
          />
          <Divider />
          <NavigationSection
            title="Analytics"
            items={navigationItems2}
            open={open}
            handleClick={handleItemClick}
            handleLinkClick={handleLinkClick}
            openItems={openItems}
            activeLink={activeLink}
            theme={theme}
            projectCount={activeProjects}
            taskCount={activeTasks}
          />
          <Divider />
          <NavigationSection
            title="Elements"
            items={navigationItems3}
            open={open}
            handleClick={handleItemClick}
            handleLinkClick={handleLinkClick}
            openItems={openItems}
            activeLink={activeLink}
            theme={theme}
          />
          <Divider />
          <NavigationSection
            title="Docs"
            items={navigationItems4}
            open={open}
            handleClick={handleItemClick}
            handleLinkClick={handleLinkClick}
            openItems={openItems}
            activeLink={activeLink}
            theme={theme}
            changelogVer={activeChangelog}
          />

          <Box
            sx={{
              position: "fixed",
              bottom: 0,
              left: 0,
              width: { xs: 240, sm: 240, md: 240, ld: 220, xl: 220 },
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              bgcolor: theme.palette.primary.main,
              color: "#FEFEFE",
              zIndex: 1200,
            }}
          >
            <Box
              sx={{
                bgcolor: theme.palette.primary.goBusiness,
                width: { xs: 240, sm: 240, md: 240, ld: 220, xl: 220 },
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                p: 1,
              }}
            >
              <WorkspacePremiumIcon />
              <Typography
                variant="subtitle1"
                sx={{ color: "white", fontWeight: "bold", pl: 1 }}
              >
                Go Business
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                p: 1,
              }}
            >
              <Avatar
                alt="Lucy Lavender"
                src={avatarPath}
                sx={{ width: 32, height: 32 }}
              />
              <Box sx={{ ml: 2 }}>
                <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
                  Lucy Lavender
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <FiberManualRecordIcon
                    sx={{ fontSize: "0.8rem", color: "green", mr: 0.5 }}
                  />
                  <Typography variant="caption">Online</Typography>
                </Box>
              </Box>
              {/* Settings Icon */}
              <Box sx={{ p: 1 }}>
                <IconButton sx={{ color: "#FEFEFE" }}>
                  <SettingsIcon />
                </IconButton>
              </Box>
            </Box>
          </Box>
        </Drawer>
      </Box>
    </>
  );
}
