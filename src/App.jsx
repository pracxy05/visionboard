import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import TasksPage from "./pages/tasks";
import HabitsPage from "./pages/habits";
import StatsPage from "./pages/stats";
import SettingsPage from "./pages/settings";
import PremiumPage from "./pages/premium";
import MainLayout from "./layouts/MainLayout";

const LayoutRoutes = [
  { path: "/dashboard", Component: DashboardPage },
  { path: "/tasks", Component: TasksPage },
  { path: "/habits", Component: HabitsPage },
  { path: "/stats", Component: StatsPage },
  { path: "/settings", Component: SettingsPage },
  { path: "/premium", Component: PremiumPage },
];

function App() {
  const [themeMode, setThemeMode] = useState("dark");
  const muiTheme = createTheme({ palette: { mode: themeMode } });

  // SINGLE theme toggle function: always switch root state
  const toggleTheme = () =>
    setThemeMode((prev) => (prev === "dark" ? "light" : "dark"));

  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          {LayoutRoutes.map(({ path, Component }) => (
            <Route
              key={path}
              path={path}
              element={
                <MainLayout themeMode={themeMode} toggleTheme={toggleTheme}>
                  <Component themeMode={themeMode} toggleTheme={toggleTheme} />
                </MainLayout>
              }
            />
          ))}
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
