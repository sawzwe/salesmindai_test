import React from "react";
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
  List,
  Typography,
  Box,
  Chip,
} from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import Link from "next/link";

const NavigationItem = ({
  item,
  open,
  handleClick,
  handleLinkClick,
  openItems,
  activeLink,
  theme,
  inboxCount,
  projectCount,
  taskCount,
  changelogVer,
}) => {
  return (
    <React.Fragment>
      <ListItem disablePadding sx={{ display: "block" }}>
        <Link href={item.link} passHref>
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: open ? "initial" : "center",
              px: 2.5,
              color: "#FEFEFE",
              backgroundColor:
                activeLink === item.link
                  ? theme.palette.primary.navOpen
                  : theme.palette.primary.main,
              "&:hover": { backgroundColor: theme.palette.primary.hover },
              textDecoration: "none",
              opacity: 0.8,
            }}
            onClick={
              item.children
                ? () => handleClick(item.label)
                : () => handleLinkClick(item.link)
            }
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : "auto",
                justifyContent: "center",
                color: "#FEFEFE",
                opacity: 0.8,
              }}
            >
              {item.icon}
            </ListItemIcon>
            {open && (
              <ListItemText
                primary={
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      variant="body2"
                      sx={{ color: "#FEFEFE", textDecoration: "none" }}
                    >
                      {item.label}
                    </Typography>
                    {item.label === "Inbox" && inboxCount ? (
                      <Chip
                        label={`${inboxCount}`}
                        size="small"
                        sx={{
                          backgroundColor: theme.palette.primary.navChip,
                          color: "#FEFEFE",
                          textDecoration: "none",
                        }}
                      />
                    ) : item.label === "Projects" && projectCount ? (
                      <Chip
                        label={`${projectCount}`}
                        size="small"
                        sx={{
                          backgroundColor: theme.palette.primary.navChip,
                          color: "#FEFEFE",
                          textDecoration: "none",
                        }}
                      />
                    ) : item.label === "Tasks" && taskCount ? (
                      <Chip
                        label={`${taskCount}`}
                        size="small"
                        sx={{
                          backgroundColor: theme.palette.primary.navChip,
                          color: "#FEFEFE",
                          textDecoration: "none",
                        }}
                      />
                    ) : item.label === "Changelog" && changelogVer ? (
                      <Chip
                        label={`v${changelogVer}`}
                        size="small"
                        sx={{
                          backgroundColor: theme.palette.primary.navChip,
                          color: "#FEFEFE",
                          textDecoration: "none",
                        }}
                      />
                    ) : null}
                  </Box>
                }
              />
            )}
            {item.children &&
              (openItems[item.label] ? <ExpandLess /> : <ExpandMore />)}
          </ListItemButton>
        </Link>
      </ListItem>
      {item.children && (
        <Collapse
          in={openItems[item.label] ?? false}
          timeout="auto"
          unmountOnExit
        >
          <List component="div" disablePadding>
            {item.children.map((childItem, childIndex) => (
              <ListItem key={`child-${childIndex}`} sx={{ pl: 4 }}>
                <Link href={childItem.link} passHref>
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: "initial",
                      px: 2.5,
                      color: "#FEFEFE",
                      backgroundColor:
                        activeLink === childItem.link
                          ? theme.palette.primary.navOpen
                          : "transparent",
                      textDecoration: "none",
                      "&:hover": {
                        backgroundColor: theme.palette.primary.hover,
                      },
                      opacity: 0.8,
                    }}
                    onClick={() => handleLinkClick(childItem.link)}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: 3,
                        justifyContent: "center",
                        color: "#FEFEFE",
                      }}
                    >
                      {childItem.icon}
                    </ListItemIcon>
                    <ListItemText
                      primary={
                        <Typography variant="body2" sx={{ color: "#FEFEFE" }}>
                          {childItem.label}
                        </Typography>
                      }
                    />
                  </ListItemButton>
                </Link>
              </ListItem>
            ))}
          </List>
        </Collapse>
      )}
    </React.Fragment>
  );
};

export default NavigationItem;
