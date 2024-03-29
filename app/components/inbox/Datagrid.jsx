"use client";
import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import {
  Box,
  Chip,
  Badge,
  Avatar,
  Typography,
  FormControlLabel,
  Checkbox,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Card,
  Drawer,
  IconButton,
} from "@mui/material";
import dummyData from "@/app/dummyData/dummydata";
import { styled, useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Message from "./Message";
import CloseIcon from "@mui/icons-material/Close";
import MoreVertIcon from "@mui/icons-material/MoreVert";

export default function Datagrid() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  const [selectedRowId, setSelectedRowId] = useState(null);
  const [selectionModel, setSelectionModel] = useState([]);
  const [filters, setFilters] = useState({
    unread: false,
    unreplied: false,
    drafting: false,
    search: "",
    campaign: "All",
    team: "All",
    leadStatus: "All",
  });
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerClose = () => {
    setDrawerOpen(false);
    setSelectedRowId(null);
  };

  const handleRowClick = (params) => {
    setSelectedRowId(params.id);
    if (isSmallScreen) {
      setDrawerOpen(true);
    }
  };

  const columns = [
    {
      field: "name",
      headerName: "Lead",
      flex: 0.25,
      renderCell: (params) => (
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            height: "100%",
          }}
        >
          <Badge
            badgeContent={params.row.unreadMessages}
            color="warning"
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            <Avatar alt={params.row.name} src={params.row.pfp_url} />
          </Badge>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              ml: "10px",
            }}
          >
            <Typography variant="body1">{params.row.name}</Typography>
            <Typography variant="caption">{params.row.role}</Typography>
          </Box>
        </Box>
      ),
    },
    {
      field: "tag",
      headerName: "Tags",
      flex: 0.2,
      renderCell: (params) => {
        let chipProps;
        switch (params.value) {
          case "Interested":
            chipProps = {
              label: params.value,
              style: {
                backgroundColor: theme.palette.primary.interested,
                color: "#000",
              },
            };
            break;
          case "Qualified Lead":
            chipProps = {
              label: params.value,
              style: {
                backgroundColor: theme.palette.primary.qualified,
                color: "#FFF",
              },
            };
            break;
          case "Referral":
            chipProps = {
              label: params.value,
              style: {
                backgroundColor: theme.palette.primary.referral,
                color: "#000",
              },
            };
            break;
          case "Not Interested":
            chipProps = {
              label: params.value,
              style: {
                backgroundColor: theme.palette.primary.notinterested,
                color: "#FFF",
              },
            };
            break;
          default:
            chipProps = {
              label: params.value,
              variant: "outlined",
            };
        }
        return <Chip {...chipProps} />;
      },
    },

    { field: "campaign", headerName: "Campaign", flex: 0.25 },
    {
      field: "Sender",
      headerName: "Sender",
      flex: 0.1,
      renderCell: (params) => (
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            height: "100%",
          }}
        >
          <Avatar alt={params.row.senderName} src={params.row.senderpfp} />
        </Box>
      ),
    },
    { field: "lastMessage", headerName: "Last Message", flex: 0.15 },
    {
      flex: 0.05,
      renderCell: (params) => (
        <IconButton>
          <MoreVertIcon />
        </IconButton>
      ),
    },
  ];

  const mobileColumns = [
    {
      field: "name",
      headerName: "Lead",
      flex: 0.55,
      renderCell: (params) => (
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            height: "100%",
          }}
        >
          <Badge
            badgeContent={params.row.unreadMessages}
            color="warning"
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            <Avatar alt={params.row.name} src={params.row.pfp_url} />
          </Badge>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              ml: "10px",
            }}
          >
            <Typography variant="body1">{params.row.name}</Typography>
            <Typography variant="caption">{params.row.role}</Typography>
          </Box>
        </Box>
      ),
    },

    { field: "campaign", headerName: "Campaign", flex: 0.45 },
  ];

  const handleFilterChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFilters({
      ...filters,
      [name]: type === "checkbox" ? checked : value,
    });
  };
  const handleFilterSearchChange = (event) => {
    setFilters({
      ...filters,
      [event.target.name]: event.target.value,
    });
  };

  const handleSelectionModelChange = (selectionModel) => {
    if (selectionModel.length > 0) {
      const latestSelectedRowId = selectionModel[selectionModel.length - 1];
      setSelectedRowId(latestSelectedRowId);
    } else {
      setSelectedRowId(null);
    }
    setSelectionModel(selectionModel);
  };
  console.log("Selected Row", selectedRowId);

  const filteredData = dummyData.filter((entry) => {
    return (
      (!filters.unread || entry.status.unread) &&
      (!filters.unreplied || entry.status.unreplied) &&
      (!filters.drafting || entry.status.drafting) &&
      (filters.campaign === "All" ||
        (filters.campaign !== "All" && entry.campaign === filters.campaign)) &&
      (filters.team === "All" || entry.team === filters.team) &&
      (filters.leadStatus === "All" ||
        (filters.leadStatus !== "All" && entry.tag === filters.leadStatus)) &&
      (filters.search === "" ||
        entry.name.toLowerCase().includes(filters.search.toLowerCase()) ||
        entry.company.toLowerCase().includes(filters.search.toLowerCase()))
    );
  });

  const uniqueCampaigns = [
    ...new Set(dummyData.map((entry) => entry.campaign)),
  ];
  const uniqueLeadStatus = [...new Set(dummyData.map((entry) => entry.tag))];

  const totalInbox = dummyData.length;
  const totalUnread = dummyData.reduce(
    (acc, entry) => acc + (entry.status.unread ? 1 : 0),
    0
  );

  const filteredrows = filteredData.map((entry) => ({
    id: entry.id,
    pfp_url: entry.pfp_url,
    unreadMessages: entry.unreadMessages,
    name: entry.name,
    role: entry.role,
    tag: entry.tag,
    campaignId: entry.campaignId,
    campaign: entry.campaign,
    senderName: entry.sender.name,
    senderpfp: entry.sender.image,
    lastMessage: `${entry.lastMessage.time}`,
  }));

  const handleCloseChat = () => {
    setSelectedRowId(null);
    setSelectionModel([]);
  };

  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Inbox
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "row", gap: "10px" }}>
            <Typography variant="subtitle1" sx={{ opacity: 0.8 }}>
              {`Total:${totalInbox}`}
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{ color: theme.palette.primary.interested }}
            >
              {`Unread:${totalUnread}`}
            </Typography>
          </Box>
        </Box>

        <Box sx={{ display: "flex", flexDirection: "row", gap: "10px" }}>
          <Card sx={{ width: isSmallScreen ? "100%" : "60%" }}>
            <Box>
              <Box sx={{ ml: "15px", mr: "15px", mt: "25px" }}>
                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap", 
                    gap: 2,
                    mb: 2,
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <TextField
                    name="search"
                    value={filters.search}
                    onChange={handleFilterSearchChange}
                    label="Search"
                    variant="outlined"
                    placeholder="Name, company or title"
                    sx={{ flex: isSmallScreen ? "1 1 45%" : "1" }} // Adjust flex basis to control width
                  />
                  <FormControl sx={{ flex: isSmallScreen ? "1 1 45%" : "1" }}>
                    <InputLabel>Campaign</InputLabel>
                    <Select
                      name="campaign"
                      value={filters.campaign}
                      onChange={handleFilterChange}
                      label="Campaign"
                    >
                      <MenuItem value="All">All</MenuItem>
                      {uniqueCampaigns.map((campaignName) => (
                        <MenuItem key={campaignName} value={campaignName}>
                          {campaignName}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>

                  <FormControl sx={{ flex: isSmallScreen ? "1 1 45%" : "1" }}>
                    {" "}
                    <InputLabel>Team</InputLabel>
                    <Select
                      name="team"
                      value={filters.team}
                      onChange={handleFilterSearchChange}
                      label="Team"
                    >
                      <MenuItem value="All">All</MenuItem>
                      {/* Add other <MenuItem> elements here for other team options */}
                    </Select>
                  </FormControl>
                  <FormControl sx={{ flex: isSmallScreen ? "1 1 45%" : "1" }}>
                    {" "}
                    <InputLabel>Lead Status</InputLabel>
                    <Select
                      name="leadStatus"
                      value={filters.leadStatus}
                      onChange={handleFilterSearchChange}
                      label="Lead Status"
                    >
                      <MenuItem value="All">All</MenuItem>
                      {uniqueLeadStatus.map((leadStatus) => (
                        <MenuItem key={leadStatus} value={leadStatus}>
                          {leadStatus}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Box>
                <Box sx={{ display: "flex", mb: 2 }}>
                  <Typography variant="subtitle1" sx={{ opacity: 0.8 }}>
                    {`Selected: ${selectionModel.length}`}
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
                  {["unread", "unreplied", "drafting"].map((status) => (
                    <FormControlLabel
                      key={status}
                      control={
                        <Checkbox
                          checked={filters[status]}
                          onChange={handleFilterChange}
                          name={status}
                        />
                      }
                      label={status.charAt(0).toUpperCase() + status.slice(1)}
                    />
                  ))}
                </Box>
              </Box>

              <DataGrid
                rows={filteredrows}
                columns={isSmallScreen ? mobileColumns : columns}
                checkboxSelection={!isSmallScreen}
                pageSize={5}
                rowsPerPageOptions={[5]}
                pagination
                hideFooter
                onRowSelectionModelChange={handleSelectionModelChange}
                selectionModel={selectionModel}
                sx={{
                  // height: "60vh",
                  height: "80vh",
                  "& .MuiDataGrid-main": {
                    maxHeight: "70vh",
                  },
                }}
                density="compact"
                rowHeight={120}
                onRowClick={handleRowClick}
              />
            </Box>
          </Card>

          {isSmallScreen ? (
            <Drawer
              anchor="bottom"
              open={isDrawerOpen}
              onClose={handleDrawerClose}
            >
              {selectedRowId && (
                <Message
                  selectedId={selectedRowId}
                  onCloseChat={handleDrawerClose}
                />
              )}
            </Drawer>
          ) : (
            selectedRowId && (
              <Card sx={{ width: "40%" }}>
                <Message
                  selectedId={selectedRowId}
                  onCloseChat={handleDrawerClose}
                />
              </Card>
            )
          )}
        </Box>
      </Box>
    </>
  );
}
