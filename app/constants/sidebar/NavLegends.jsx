"use client";
import React, { useState } from "react";
import { Box, Badge, IconButton, Menu, MenuItem, Fab } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import PowerSettingsNewOutlinedIcon from "@mui/icons-material/PowerSettingsNewOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import { US, CN, TH, GB } from "country-flag-icons/react/3x2";

export default function NavLegends() {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const [selectedFlag, setSelectedFlag] = useState("US");
  const flags = { US, CN, TH, GB };
  const FlagIcon = flags[selectedFlag];

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleFlagSelect = (countryCode) => {
    setSelectedFlag(countryCode);
    handleClose();
  };

  return (
    <Box
      sx={{
        bgcolor: theme.palette.primary.mainBackground,
        display: "flex",
        height: "64px",
        alignItems: "center",
        justifyContent: "flex-end",
        paddingRight: theme.spacing(2),
        gap: theme.spacing(2),
      }}
    >
        <IconButton>
        <Badge badgeContent={3} color="info">
        <NotificationsOutlinedIcon color="action" />
      </Badge>
        </IconButton>

      <IconButton>
      <Badge badgeContent={7} color="info">
        <ChatBubbleOutlineOutlinedIcon color="action" />
      </Badge>
      </IconButton>

      <IconButton
        size="small"
        onClick={handleClick}
      >
        <FlagIcon
          title={selectedFlag}
          style={{ width: "24px", height: "24px" }}
        />
      </IconButton>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "flag-button",
        }}
      >
        <MenuItem onClick={() => handleFlagSelect("CN")}>
          <CN title="China" style={{ width: "24px", height: "16px" }} />
        </MenuItem>
        <MenuItem onClick={() => handleFlagSelect("TH")}>
          <TH title="Thailand" style={{ width: "24px", height: "16px" }} />
        </MenuItem>
        <MenuItem onClick={() => handleFlagSelect("GB")}>
          <GB
            title="United Kingdom"
            style={{ width: "24px", height: "16px" }}
          />
        </MenuItem>
        <MenuItem onClick={() => handleFlagSelect("US")}>
          <US title="United States" style={{ width: "24px", height: "16px" }} />
        </MenuItem>
      </Menu>
      <IconButton
        size="small"
        onClick={() => {
          /* handle logout or power action */
        }}
      >
        <PowerSettingsNewOutlinedIcon color="action" />
      </IconButton>
    </Box>
  );
}
