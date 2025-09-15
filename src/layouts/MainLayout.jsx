import React from "react";
import { Box, Toolbar, useTheme } from "@mui/material";
import Sidebar from "../components/Sidebar";
import TopBar from "../components/TopBar";

const drawerWidth = 80;

function MainLayout({ children, themeMode, toggleTheme }) {
  const theme = useTheme();

  return (
    <Box sx={{ display: "flex" }}>
      {/* TopBar with higher zIndex */}
      <TopBar themeMode={themeMode} onToggleTheme={toggleTheme} />

      {/* Sidebar: fixed to left, below topbar */}
      <Sidebar themeMode={themeMode} onToggleTheme={toggleTheme} />

      {/* Main content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          ml: `${drawerWidth}px`, // Offset for fixed sidebar width
          mt: "64px", // Offset for appbar height
          minHeight: "100vh",
          backgroundColor: themeMode === "dark" ? "#121212" : "#f7f7f7",
          transition: "background 0.3s",
        }}
      >
        {/* Toolbar to offset content */}
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
}

export default MainLayout;
