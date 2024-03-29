"use client";
import React, { useState, useEffect, useRef } from "react";
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
  Button,
  TextField,
  Tabs,
  Tab,
  InputLabel,
  Popover,
  ListItemIcon,
} from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import dummyData from "@/app/dummyData/dummydata";
import inboxDummyMessages from "@/app/dummyData/inboxDummyMessage";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CloseIcon from "@mui/icons-material/Close";
import SendIcon from "@mui/icons-material/Send";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import CachedIcon from "@mui/icons-material/Cached";
import ImageIcon from "@mui/icons-material/Image";
import AddBoxIcon from "@mui/icons-material/AddBox";
import EmojiPicker from "emoji-picker-react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MarkunreadIcon from "@mui/icons-material/Markunread";

const formatTimestamp = (timestamp) => {
  const date = new Date(timestamp);
  return date.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
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

// Custom styling for Tabs container
const StyledTabs = styled(Tabs)(({ theme }) => ({
  boxShadow: "none",
  "& .MuiTabs-flexContainer": {
    border: `1px solid ${theme.palette.primary.chatColor}`,
    borderRadius: theme.shape.borderRadius,
  },
  ".MuiTabs-indicator": {
    display: "none",
  },
}));

// Custom styling for individual Tab
const StyledTab = styled(Tab)(({ theme }) => ({
  textTransform: "none",
  flex: 1,
  borderRadius: `${theme.shape.borderRadius}px 0 0 ${theme.shape.borderRadius}px`,
  "&:not(:first-of-type)": {
    borderRadius: 0,
  },
  "&:last-of-type": {
    borderRadius: `0 ${theme.shape.borderRadius}px ${theme.shape.borderRadius}px 0`,
  },
  "&.Mui-selected": {
    backgroundColor: theme.palette.primary.chatColor,
    color: theme.palette.common.white,
  },
  borderWidth: "1px",
  borderStyle: "solid",
  borderColor: theme.palette.primary.chatColor,
  zIndex: 1,
}));

export default function Message({ selectedId, onCloseChat }) {
  const theme = useTheme();
  const user = dummyData.find((u) => u.id === selectedId);
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedTag, setSelectedTag] = useState(user.tag);
  const [tabValue, setTabValue] = useState(0);
  const [message, setMessage] = useState("");
  const [selectedTitleId, setSelectedTitleId] = useState(
    inboxDummyMessages[0].titleId
  );
  const [anchorEmoji, setAnchorEmoji] = useState(null);
  const [selectedVariantIndex, setSelectedVariantIndex] = useState(0);
  const [menuAnchorEl, setMenuAnchorEl] = useState(null);
  const messagesEndRef = useRef(null);

  const openLinkedInProfile = (url) => {
    window.open(url, "_blank");
    handleClose();
  };

  const handleMenuClick = (event) => {
    setMenuAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setMenuAnchorEl(null);
  };

  const getDefaultMessage = () => {
    if (selectedTitleId === "custom") {
      return "";
    } else {
      const selectedTitle = inboxDummyMessages.find(
        (title) => title.titleId === selectedTitleId
      );
      return selectedTitle && selectedTitle.variants[selectedVariantIndex]
        ? selectedTitle.variants[selectedVariantIndex].content
        : "";
    }
  };

  const [defaultMessage, setDefaultMessage] = useState(getDefaultMessage());

  useEffect(() => {
    setDefaultMessage(getDefaultMessage());
  }, [selectedTitleId, selectedVariantIndex]);

  const handleRegenerateClick = () => {
    setMessage(defaultMessage);
  };

  const handleEmojiClick = (event, emojiObject) => {
    // console.log("Emoji Object", event)
    setMessage((prevMessage) => prevMessage + event.emoji);
    setAnchorEmoji(null);
  };

  const handleEmojiPickerOpen = (event) => {
    event.preventDefault();
    setAnchorEmoji(event.currentTarget);
  };

  const handleEmojiPickerClose = () => {
    setAnchorEmoji(null);
  };

  const open = Boolean(anchorEmoji);
  const id = open ? "emoji-picker-popover" : undefined;

  const selectedTitle = inboxDummyMessages.find(
    (title) => title.titleId === selectedTitleId
  );

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
    const variantContent = selectedTitle.variants[newValue].content;
    setMessage(variantContent);
    setSelectedVariantIndex(newValue);
  };

  const handleReplyTypeChange = (event) => {
    const newTitleId = event.target.value;

    if (newTitleId === "custom") {
      setMessage("");
      setSelectedTitleId(newTitleId);
    } else {
      setSelectedTitleId(newTitleId);
      const newTitle = inboxDummyMessages.find(
        (title) => title.titleId === newTitleId
      );
      setMessage(newTitle.variants[0].content);
      setSelectedVariantIndex(0);
    }
  };

  useEffect(() => {
    setMessage(selectedTitle.variants[0].content);
  }, []);

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

  // console.log("User", user);
  if (!user || !user.conversation) {
    return <Typography>No conversation selected.</Typography>;
  }

  const groupedMessages = groupMessagesByDate(user.conversation);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [groupedMessages]);

  const handleTagClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleTagChange = (tag) => {
    setSelectedTag(tag);
    setAnchorEl(null);
  };

  const handleSendMessage = () => {
    if (message.trim() === "") {
      return;
    }

    const newMessage = {
      messageId: Date.now(),
      senderId: 999,
      sender: "Julien Gadea",
      text: message,
      timestamp: new Date().toISOString(),
    };

    const userIndex = dummyData.findIndex((u) => u.id === selectedId);
    if (userIndex >= 0) {
      const updatedUser = {
        ...dummyData[userIndex],
        conversation: [...dummyData[userIndex].conversation, newMessage],
      };

      dummyData[userIndex] = updatedUser;
      localStorage.setItem("conversationData", JSON.stringify(dummyData));
      setMessage("");
    }
  };

  const handleMarkAsUnread = (id) => {
    const user = dummyData.find((u) => u.id === id);
    if (user) {
      user.status.unread = false;
      localStorage.setItem("dummyData", JSON.stringify(dummyData));
    }
    handleClose();
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
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
          }}
        >
          {" "}
          <>
            <IconButton onClick={handleMenuClick}>
              <MoreVertIcon />
            </IconButton>
            <Menu
              anchorEl={menuAnchorEl}
              open={Boolean(menuAnchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={() => openLinkedInProfile(user.linkedIn_url)}>
                <ListItemIcon>
                  <LinkedInIcon fontSize="small" />
                </ListItemIcon>
                <Typography variant="inherit">View on LinkedIn</Typography>
              </MenuItem>
              <MenuItem onClick={() => handleMarkAsUnread(selectedId)}>
                <ListItemIcon>
                  <MarkunreadIcon fontSize="small" />
                </ListItemIcon>
                <Typography variant="inherit">Mark as unread</Typography>
              </MenuItem>
            </Menu>
          </>
          <IconButton onClick={onCloseChat}>
            <CloseIcon />
          </IconButton>
        </Box>
      </Box>
      <Divider />

      {/* <Box sx={{ height: "65vh", overflowY: "auto" }}> */}
      <Box
        sx={{
          height: "65vh",
          overflowY: "auto",
          flexDirection: "column-reverse",
        }}
      >
        {/* <div ref={messagesEndRef} /> */}
        {Object.entries(groupedMessages).map(([date, messages]) => (
          // {Object.entries(groupedMessages).reverse().map(([date, messages]) => (
          <Box key={date} mb={2}>
            <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
              <Typography variant="overline">{date}</Typography>
            </Box>
            {messages.map((message) => {
              const isOutgoing = message.senderId === selectedId;
              // console.log(isOutgoing);
              return (
                <>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "flex-end",
                      padding: "10px",
                    }}
                  >
                    <Card
                      key={message.messageId}
                      variant="outlined"
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        maxWidth: "70%",
                        width: "70%",
                        alignSelf: isOutgoing ? "flex-start" : "flex-end",
                        alignItems: "left",
                        my: 1,
                        bgcolor: isOutgoing
                          ? theme.palette.grey[100]
                          : theme.palette.primary.chatColor,
                        color: isOutgoing ? "#000" : "#FFF",
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
                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "space-between",
                            }}
                          >
                            <Typography
                              color={isOutgoing ? "textSecondary" : "#FFF"}
                              sx={{
                                textAlign: isOutgoing ? "left" : "right",
                              }}
                            >
                              {message.sender}
                            </Typography>
                            <Typography
                              sx={{
                                color: isOutgoing ? "#000" : "#FFF",
                                textAlign: isOutgoing ? "left" : "right",
                              }}
                            >
                              {formatTimestamp(message.timestamp)}
                            </Typography>
                          </Box>

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
      <Divider />

      <Box>
        <Box sx={{ padding: 2, borderRadius: 2 }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              marginBottom: 2,
              gap: "20px",
              alignItems: "center",
              width: "100%",
            }}
          >
            <FormControl sx={{ width: "30%" }}>
              <InputLabel id="reply-type-label">Reply type</InputLabel>
              <Select
                labelId="reply-type-label"
                value={selectedTitleId}
                onChange={handleReplyTypeChange}
                label="Reply type"
              >
                {inboxDummyMessages.map((title) => (
                  <MenuItem key={title.titleId} value={title.titleId}>
                    {title.title}
                  </MenuItem>
                ))}
                <MenuItem value="custom">Custom</MenuItem>
              </Select>
            </FormControl>

            {selectedTitleId !== "custom" && (
              <StyledTabs
                value={tabValue}
                onChange={handleTabChange}
                variant="scrollable"
                scrollButtons="auto"
                aria-label="scrollable auto tabs example"
                sx={{ width: "70%" }}
              >
                {selectedTitle.variants.map((variant, index) => (
                  <StyledTab key={variant.id} label={`Variant ${index + 1}`} />
                ))}
              </StyledTabs>
            )}
          </Box>

          <TextField
            fullWidth
            multiline
            rows={4}
            variant="outlined"
            placeholder="Type your message here"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            sx={{ marginBottom: 2, backgroundColor: "#fff" }}
          />

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box>
              <IconButton color="primary" onClick={handleEmojiPickerOpen}>
                <EmojiEmotionsIcon />
              </IconButton>
              <Popover
                id={id}
                open={open}
                anchorEl={anchorEmoji}
                onClose={handleEmojiPickerClose}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                disableRestoreFocus
              >
                <EmojiPicker onEmojiClick={handleEmojiClick} />
              </Popover>
              <IconButton color="primary" component="label">
                <AddBoxIcon />
                <input hidden accept="image/*" multiple type="file" />
              </IconButton>

              <IconButton color="primary" component="label">
                <ImageIcon />
                <input hidden accept="image/*" multiple type="file" />
              </IconButton>
            </Box>

            <Button
              variant="contained"
              startIcon={<CachedIcon />}
              onClick={handleRegenerateClick} // Set onClick handler
              sx={{ textTransform: "none", borderRadius: 20 }}
            >
              Regenerate respond
            </Button>
          </Box>

          <Button
            variant="contained"
            sx={{ width: "100%", mt: "10px" }}
            onClick={handleSendMessage}
          >
            <SendIcon />
            Send
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
