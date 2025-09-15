import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  InputBase,
  Box,
  Badge,
  Tooltip,
  Avatar,
  Menu,
  MenuItem,
  useTheme
} from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SearchIcon from "@mui/icons-material/Search";
import SettingsIcon from "@mui/icons-material/Settings";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

function TopBar({ themeMode, toggleTheme }) {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleAvatarClick = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  return (
    <AppBar
      position="fixed"
      sx={{
        zIndex: theme.zIndex.drawer + 10,
        left: 0,
        top: 0,
        width: "100%",
        background:
          theme.palette.mode === "dark"
            ? "linear-gradient(90deg,#16181f 60%,#222532 100%)"
            : "linear-gradient(90deg,#39FF14 0%,#e3fcec 100%)",
        boxShadow:
          theme.palette.mode === "dark"
            ? "0 2px 12px #39FF1460"
            : "0 2px 12px #4caf5060",
        transition: "background 0.3s",
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between", px: 4 }}>
        {/* Logo and Brand */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/3/3d/LARGE_ICON.png"
            alt="Logo"
            width={36}
            height={36}
            style={{ borderRadius: 8, boxShadow: "0 0 8px #39FF14" }}
          />
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              letterSpacing: 2,
              color: theme.palette.text.primary,
            }}
          >
            VisionBoard
          </Typography>
        </Box>
        {/* Center Search Input */}
        <Box
          sx={{
            bgcolor: theme.palette.mode === "dark" ? "#1f232a" : "#e0f2f1",
            px: 2,
            borderRadius: 2,
            display: "flex",
            alignItems: "center",
            boxShadow: "0 0 10px #39FF1422",
          }}
        >
          <SearchIcon sx={{ color: theme.palette.mode === "dark" ? "#39FF14" : "#4caf50", mr: 1 }} />
          <InputBase
            placeholder="Search anything…"
            sx={{
              color: theme.palette.text.primary,
              width: 180,
            }}
          />
        </Box>
        {/* Right Actions: Notifications, Settings, Theme, Profile */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Tooltip title="Notifications">
            <IconButton sx={{ color: theme.palette.mode === "dark" ? "#39FF14" : "#4caf50" }}>
              <Badge badgeContent={5} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </Tooltip>
          <Tooltip title="Settings">
            <IconButton sx={{ color: theme.palette.mode === "dark" ? "#39FF14" : "#4caf50" }}>
              <SettingsIcon />
            </IconButton>
          </Tooltip>
          {/* Theme Toggle Button */}
          <Tooltip title="Switch Theme">
            <IconButton onClick={toggleTheme} sx={{ color: theme.palette.mode === "dark" ? "#39FF14" : "#4caf50" }}>
              {themeMode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
          </Tooltip>
          {/* Profile Avatar */}
          <Tooltip title="Account">
            <IconButton onClick={handleAvatarClick}>
              <Avatar
                src=""
                sx={{
                  bgcolor: theme.palette.mode === "dark" ? "#39FF14" : "#4caf50",
                  color: "#222",
                  width: 36,
                  height: 36,
                  fontWeight: "bold"
                }}
              >
                P
              </Avatar>
            </IconButton>
          </Tooltip>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>Settings</MenuItem>
            <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default TopBar;
