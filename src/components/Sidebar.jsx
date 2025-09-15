import React from "react";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Divider,
  IconButton,
  Avatar,
  Typography,
  Tooltip,
  Badge,
  useTheme,
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AssignmentIcon from "@mui/icons-material/Assignment";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import InsightsIcon from "@mui/icons-material/Insights";
import SettingsIcon from "@mui/icons-material/Settings";
import CardMembershipIcon from "@mui/icons-material/CardMembership";
import LogoutIcon from "@mui/icons-material/Logout";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { useNavigate } from "react-router-dom";

function Sidebar({ themeMode, toggleTheme }) {
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        height: "100vh",
        width: "80px",
        bgcolor: theme.palette.background.default,
        color: theme.palette.text.primary,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        zIndex: theme.zIndex.drawer + 1,
        boxShadow: "2px 0 8px rgba(0,0,0,0.07)",
        transition: "background 0.3s",
      }}
    >
      {/* Logo */}
      <Box sx={{ py: 2 }}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/3/3d/LARGE_ICON.png"
          alt="Logo"
          width={38}
          height={38}
          style={{
            borderRadius: 8,
            boxShadow:
              theme.palette.mode === "dark"
                ? "0 0 12px #39FF14"
                : "0 0 12px #4caf50",
          }}
        />
      </Box>

      {/* Navigation and Premium */}
      <Box sx={{ flex: 1 }}>
        <List>
          <Tooltip title="Dashboard" placement="right">
            <ListItem disablePadding>
              <ListItemButton onClick={() => navigate("/dashboard")}>
                <ListItemIcon>
                  <DashboardIcon fontSize="medium" sx={{ color: theme.palette.text.primary }} />
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
          </Tooltip>
          <Tooltip title="Tasks" placement="right">
            <ListItem disablePadding>
              <ListItemButton onClick={() => navigate("/tasks")}>
                <ListItemIcon>
                  <Badge badgeContent={3} color="error">
                    <AssignmentIcon fontSize="medium" sx={{ color: theme.palette.text.primary }} />
                  </Badge>
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
          </Tooltip>
          <Tooltip title="Habits" placement="right">
            <ListItem disablePadding>
              <ListItemButton onClick={() => navigate("/habits")}>
                <ListItemIcon>
                  <EmojiEventsIcon fontSize="medium" sx={{ color: theme.palette.text.primary }} />
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
          </Tooltip>
          <Tooltip title="Stats" placement="right">
            <ListItem disablePadding>
              <ListItemButton onClick={() => navigate("/stats")}>
                <ListItemIcon>
                  <InsightsIcon fontSize="medium" sx={{ color: theme.palette.text.primary }} />
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
          </Tooltip>
          <Tooltip title="Settings" placement="right">
            <ListItem disablePadding>
              <ListItemButton onClick={() => navigate("/settings")}>
                <ListItemIcon>
                  <SettingsIcon fontSize="medium" sx={{ color: theme.palette.text.primary }} />
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
          </Tooltip>
          <Tooltip title="Premium" placement="right">
            <ListItem disablePadding>
              <ListItemButton onClick={() => navigate("/premium")}>
                <ListItemIcon>
                  <CardMembershipIcon fontSize="medium" sx={{ color: theme.palette.text.primary }} />
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
          </Tooltip>
        </List>
      </Box>

      <Divider sx={{ width: "60%", my: 1, bgcolor: theme.palette.mode === "dark" ? "#39FF14" : "#4caf50" }} />

      {/* Theme toggle & Profile */}
      <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", pb: 2, gap: 1 }}>
        <Tooltip title="Switch Theme">
          <IconButton onClick={toggleTheme} sx={{ color: theme.palette.mode === "dark" ? "#39FF14" : "#4caf50" }}>
            {themeMode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
        </Tooltip>
        <Avatar
          sx={{
            bgcolor: theme.palette.mode === "dark" ? "#39FF14" : "#4caf50",
            color: "#222",
            width: 44,
            height: 44,
            mb: 0.5,
            mx: "auto",
            fontWeight: "bold",
            fontSize: 18,
            boxShadow: `0 0 8px ${theme.palette.mode === "dark" ? "#39FF14" : "#4caf50"}`
          }}
          src=""
        >
          P
        </Avatar>
        <Typography
          variant="caption"
          sx={{
            color: theme.palette.mode === "dark" ? "#39FF14" : "#4caf50",
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          Praharsh
        </Typography>
        <IconButton sx={{ mt: 0.5, color: "#b9bdc8" }}>
          <LogoutIcon fontSize="small" />
        </IconButton>
      </Box>
    </Box>
  );
}

export default Sidebar;
