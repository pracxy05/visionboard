import React, { useState } from 'react';
import {
  Typography, Box, Paper, Avatar, Stack, TextField, Button, Divider, Switch,
  FormGroup, FormControlLabel, Menu, MenuItem, useTheme
} from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import LockIcon from '@mui/icons-material/Lock';

function SettingsPage({ themeMode, toggleTheme }) {
  const theme = useTheme();

  const [profile, setProfile] = useState({
    name: 'Praharsh Andole',
    username: 'praharsh.a',
    email: 'praharsh@email.com',
    phone: '+91 12345 67890',
    avatar: null,
  });

  const [linkedAccounts, setLinkedAccounts] = useState({
    google: true,
    facebook: false,
    github: true,
  });

  const [notifications, setNotifications] = useState({
    push: true,
    email: false,
    sms: false,
    marketing: false,
    system: true,
  });

  // Handlers for toggles and updates
  const handleProfileChange = (field) => (e) => {
    setProfile({ ...profile, [field]: e.target.value });
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setProfile({ ...profile, avatar: url });
    }
  };

  const toggleLinkedAccount = (account) => {
    setLinkedAccounts({ ...linkedAccounts, [account]: !linkedAccounts[account] });
  };

  const toggleNotification = (type) => {
    setNotifications({ ...notifications, [type]: !notifications[type] });
  };

  // Account deletion simulation
  const [deleteAnchor, setDeleteAnchor] = useState(null);
  const openDeleteMenu = (event) => setDeleteAnchor(event.currentTarget);
  const closeDeleteMenu = () => setDeleteAnchor(null);
  const confirmDelete = () => {
    alert('Account deletion requested.');
    closeDeleteMenu();
  };

  return (
    <Box sx={{ p: 4, maxWidth: 900, mx: 'auto', color: theme.palette.text.primary }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Settings
      </Typography>

      {/* Account & Identity */}
      <Paper sx={{ p: 4, mb: 4, borderRadius: 3, bgcolor: theme.palette.background.paper }}>
        <Typography variant="h6" fontWeight="bold" mb={3}>
          🔑 Account & Identity
        </Typography>

        {/* Profile Info */}
        <Stack spacing={3} direction="row" alignItems="center" mb={3}>
          <Box sx={{ position: 'relative' }}>
            {profile.avatar ? (
              <Avatar src={profile.avatar} sx={{ width: 80, height: 80 }} />
            ) : (
              <Avatar sx={{ width: 80, height: 80, bgcolor: theme.palette.primary.main }}>
                <AccountCircleIcon sx={{ fontSize: 64 }} />
              </Avatar>
            )}
            <Button
              variant="contained"
              component="label"
              size="small"
              sx={{
                position: 'absolute',
                bottom: 0,
                right: 0,
                fontSize: 10,
                bgcolor: theme.palette.secondary.main,
              }}
            >
              Change
              <input hidden accept="image/*" type="file" onChange={handleAvatarChange} />
            </Button>
          </Box>

          <Box sx={{ flexGrow: 1 }}>
            <TextField
              label="Name"
              value={profile.name}
              onChange={handleProfileChange('name')}
              fullWidth
              sx={{ mb: 2 }}
            />
            <TextField
              label="Username"
              value={profile.username}
              onChange={handleProfileChange('username')}
              fullWidth
              sx={{ mb: 2 }}
            />
            <TextField
              label="Email"
              value={profile.email}
              onChange={handleProfileChange('email')}
              fullWidth
              type="email"
              sx={{ mb: 2 }}
            />
            <TextField
              label="Phone Number"
              value={profile.phone}
              onChange={handleProfileChange('phone')}
              fullWidth
              sx={{ mb: 2 }}
            />
          </Box>
        </Stack>

        {/* Password & Security */}
        <Button startIcon={<LockIcon />} variant="outlined" sx={{ mb: 2 }}>
          Change / Reset Password
        </Button>

        {/* Linked Accounts */}
        <Typography fontWeight="bold" mb={1}>
          Linked Accounts / Social Logins
        </Typography>
        <Stack direction="row" spacing={2} mb={2}>
          {[
            { label: 'Google', icon: <GoogleIcon />, linked: linkedAccounts.google },
            { label: 'Facebook', icon: <FacebookIcon />, linked: linkedAccounts.facebook },
            { label: 'GitHub', icon: <GitHubIcon />, linked: linkedAccounts.github },
          ].map(({ label, icon, linked }) => (
            <Button
              key={label}
              variant={linked ? 'contained' : 'outlined'}
              startIcon={icon}
              onClick={() => toggleLinkedAccount(label.toLowerCase())}
              color={linked ? 'primary' : 'inherit'}
            >
              {linked ? `Linked to ${label}` : `Link ${label}`}
            </Button>
          ))}
        </Stack>

        {/* Two-factor Authentication */}
        <Button variant="outlined" sx={{ mb: 2 }}>
          Enable Two-Factor Authentication (2FA / OTP)
        </Button>

        {/* Account Deletion */}
        <Button
          variant="contained"
          color="error"
          startIcon={<DeleteForeverIcon />}
          onClick={openDeleteMenu}
        >
          Delete / Deactivate Account
        </Button>
        <Menu
          anchorEl={deleteAnchor}
          open={Boolean(deleteAnchor)}
          onClose={closeDeleteMenu}
        >
          <MenuItem onClick={confirmDelete}>Confirm Account Deletion</MenuItem>
          <MenuItem onClick={closeDeleteMenu}>Cancel</MenuItem>
        </Menu>
      </Paper>

      {/* Notifications */}
      <Paper sx={{ p: 4, borderRadius: 3, bgcolor: theme.palette.background.paper }}>
        <Typography variant="h6" fontWeight="bold" mb={3}>
          🔔 Notifications
        </Typography>
        <FormGroup>
          <FormControlLabel
            control={<Switch checked={notifications.push} onChange={() => toggleNotification('push')} />}
            label="Push Notifications"
          />
          <FormControlLabel
            control={<Switch checked={notifications.email} onChange={() => toggleNotification('email')} />}
            label="Email Notifications"
          />
          <FormControlLabel
            control={<Switch checked={notifications.sms} onChange={() => toggleNotification('sms')} />}
            label="SMS Alerts"
          />
          <Divider sx={{ my: 2 }} />
          <FormControlLabel
            control={<Switch checked={notifications.marketing} onChange={() => toggleNotification('marketing')} />}
            label="Marketing Emails"
          />
          <FormControlLabel
            control={<Switch checked={notifications.system} onChange={() => toggleNotification('system')} />}
            label="System Updates"
          />
        </FormGroup>

        <Divider sx={{ my: 4 }} />

        {/* Dark/Light Theme */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography fontWeight="bold">Theme:</Typography>
          <Button
            variant="contained"
            onClick={toggleTheme}
            sx={{
              bgcolor: theme.palette.mode === "dark" ? "#39FF14" : "#4caf50",
              color: "#222",
              fontWeight: "bold",
            }}
          >
            Switch to {themeMode === 'dark' ? 'Light' : 'Dark'} Mode
          </Button>
        </Box>
      </Paper>
    </Box>
  );
}

export default SettingsPage;
