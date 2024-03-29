"use client";
import React, { useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Divider,
  Avatar,
  IconButton,
  Chip,
  FormControl,
  Select,
  MenuItem,
  Menu,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import dummyData from "@/app/dummyData/dummydata";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CloseIcon from "@mui/icons-material/Close";

const formatTimestamp = (timestamp) => {
  // Function to format timestamp into a readable format
  const date = new Date(timestamp);
  return `${date.toDateString()} ${date.toLocaleTimeString()}`;
};

const groupMessagesByDate = (conversation) => {
  // Function to group messages by their date
  const grouped = {};
  conversation.forEach((message) => {
    const date = new Date(message.timestamp).toDateString();
    if (!grouped[date]) {
      grouped[date] = [];
    }
    grouped[date].push(message);
  });
  return grouped;
};

export default function Message({ selectedId }) {
  const theme = useTheme();
  const user = dummyData.find((u) => u.id === selectedId);
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedTag, setSelectedTag] = useState(user.tag);

  const userTags = {
    Interested: {
      backgroundColor: theme.palette.primary.interested,
      color: "#000",
    },
    "Qualified Lead": {
      backgroundColor: theme.palette.primary.qualified,
      color: "#FFF",
    },
    Referral: {
      backgroundColor: theme.palette.primary.referral,
      color: "#000",
    },
    "Not Interested": {
      backgroundColor: theme.palette.primary.notinterested,
      color: "#FFF",
    },
  };

  const tagStyle = userTags[user.tag] || { variant: "outlined" };

  console.log("User", user);
  if (!user || !user.conversation) {
    return <Typography>No conversation selected.</Typography>;
  }

  const groupedMessages = groupMessagesByDate(user.conversation);

  const handleTagClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleTagChange = (tag) => {
    setSelectedTag(tag);
    setAnchorEl(null);
  };

  return (
    <Box>
      <Box
        sx={{
          mt: "20px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          mb: "10px",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "row", ml: "10px" }}>
          <Avatar
            alt={user.name}
            src={user.pfp_url}
            sx={{
              width: 40,
              height: 40,
            }}
          />

          <Box sx={{ display: "flex", flexDirection: "column", ml: "15px" }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                gap: "20px",
                alignItems: "center",
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: "600" }}>
                {user.name}
              </Typography>
              <Chip
                size="small"
                label={user.tag}
                onClick={handleTagClick}
                style={{
                  borderRadius: "16px", // This gives the Chip rounded corners
                  backgroundColor: tagStyle.backgroundColor,
                  color: tagStyle.color,
                }}
              />
              <Menu
                id="tag-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={() => setAnchorEl(null)}
              >
                {Object.keys(userTags).map((tag) => (
                  <MenuItem key={tag} onClick={() => handleTagChange(tag)}>
                    {tag}
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <Typography sx={{ fontWeight: "600" }}>
              Occupation: {user.role}
            </Typography>
            <Typography>Company: {user.company}</Typography>
            <Typography>Location: {user.location}</Typography>
          </Box>
        </Box>
        <Box>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
          <IconButton>
            <CloseIcon />
          </IconButton>
        </Box>
      </Box>
      <Divider />

      <Box sx={{ height: "60vh", overflowY: "auto" }}>
        {Object.entries(groupedMessages).map(([date, messages]) => (
          <Box key={date} mb={2}>
            <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
              <Typography variant="overline">{date}</Typography>
            </Box>
            {messages.map((message) => {
              const isOutgoing = message.senderId === selectedId;
              console.log(isOutgoing);
              return (
                <>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "flex-end",
                    }}
                  >
                    <Card
                      key={message.messageId}
                      variant="outlined"
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        maxWidth: "70%",
                        alignSelf: isOutgoing ? "flex-start" : "flex-end",
                        alignItems: "center",
                        my: 1,
                        bgcolor: isOutgoing
                          ? theme.palette.grey[100]
                          : theme.palette.primary.main,
                        color: isOutgoing ? "#000" : "#FFF",
                        // border: isOutgoing ? 1 : 0,
                        // borderColor: "primary.light",
                        boxShadow: 3,
                        borderRadius: "10px",
                      }}
                    >
                      <CardContent
                        sx={{
                          display: "flex",
                          flexDirection: isOutgoing ? "row-reverse" : "row",
                        }}
                      >
                        <Avatar
                          alt={message.sender}
                          src={
                            message.senderId === user.id
                              ? user.pfp_url
                              : user.sender.image
                          }
                          sx={{
                            width: 40,
                            height: 40,
                            order: isOutgoing ? 2 : 0,
                          }}
                        />
                        <Box
                          sx={{
                            flex: 1,
                            order: 1,
                            ml: isOutgoing ? 0 : 2,
                            mr: isOutgoing ? 2 : 0,
                          }}
                        >
                          <Typography
                            color="textSecondary"
                            sx={{
                              textAlign: isOutgoing ? "left" : "right",
                              color: isOutgoing ? "#000" : "#FFF",
                            }}
                          >
                            {isOutgoing ? message.sender : message.sender}
                            {/* at{" "} */}
                            {/* {formatTimestamp(message.timestamp)} */}
                          </Typography>
                          <Typography
                            sx={{
                              // textAlign: isOutgoing ? "right" : "left",
                              color: isOutgoing ? "#000" : "#FFF",
                            }}
                          >
                            {message.text}
                          </Typography>
                        </Box>
                      </CardContent>
                    </Card>
                  </Box>
                </>
              );
            })}
          </Box>
        ))}
      </Box>
    </Box>
  );
}
