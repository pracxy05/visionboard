import React, { useState } from 'react';
import { Box, Button, TextField, Typography, Paper, Divider, Stack, Link, useTheme } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LockIcon from '@mui/icons-material/Lock';
import { useNavigate } from 'react-router-dom';

const dynamicBlobStyle = {
  position: 'absolute',
  zIndex: 0,
  pointerEvents: 'none'
};

const backgroundBlobs = (
  <Box>
    <Box sx={{
      ...dynamicBlobStyle,
      top: 30,
      left: 60,
      width: 180,
      height: 180,
      bgcolor: "rgba(118, 75, 162, 0.4)",
      borderRadius: "50%",
      animation: "floatBlob 7s ease-in-out infinite"
    }} />
    <Box sx={{
      ...dynamicBlobStyle,
      bottom: 40,
      right: 90,
      width: 120,
      height: 120,
      bgcolor: "rgba(102, 126, 234, 0.4)",
      borderRadius: "40% 60% 60% 40% / 50% 30% 70% 50%",
      animation: "floatBlob2 9s ease-in-out infinite"
    }} />
    <style>
      {`
        @keyframes floatBlob {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(40px) scale(1.07); }
        }
        @keyframes floatBlob2 {
          0%, 100% { transform: translateY(0) scale(1); }
          40% { transform: translateY(-30px) scale(1.1); }
        }
      `}
    </style>
  </Box>
);

function LoginPage() {
  const theme = useTheme();
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (username.trim() && password.trim()) {
      navigate('/dashboard');
    }
  };

  // Paper bg adapts to mode for best contrast
  const paperBg = theme.palette.mode === "dark"
    ? theme.palette.background.paper
    : "rgba(255, 255, 255, 0.98)";

  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background:
          'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        px: 2,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {backgroundBlobs}

      <Paper
        elevation={14}
        sx={{
          p: 5,
          borderRadius: 3,
          maxWidth: 400,
          width: '100%',
          boxShadow: '0 8px 24px rgba(103,58,183,0.3)',
          border: '3px solid',
          borderImage: 'linear-gradient(135deg, #667eea 0%, #764ba2 80%) 1',
          position: 'relative',
          zIndex: 2,
          background: paperBg,
        }}
      >
        <Box sx={{ textAlign: 'center', mb: 3 }}>
          <Typography variant="h3" fontWeight="bold" color={theme.palette.primary.dark}>
            VisionBoard
          </Typography>
          <Typography fontSize={18} color={theme.palette.text.primary} sx={{ mt: 1 }}>
            Welcome to your{' '}
            <span style={{ color: '#4285F4', fontWeight: 600 }}>
              personal productivity universe!
            </span>
          </Typography>
          <Typography fontWeight="bold" color={theme.palette.primary.dark} sx={{ mt: 2 }}>
            🚀 "Unleash your best self every day."
          </Typography>
        </Box>

        <form onSubmit={handleLogin} noValidate>
          <Stack spacing={2}>
            <TextField
              label="Username"
              variant="outlined"
              fullWidth
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              InputProps={{
                startAdornment: <AccountCircleIcon sx={{ mr: 1, color: theme.palette.primary.main }} />,
                style: { color: theme.palette.text.primary }
              }}
              InputLabelProps={{
                style: { color: theme.palette.text.primary }
              }}
              required
            />
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              InputProps={{
                startAdornment: <LockIcon sx={{ mr: 1, color: theme.palette.primary.main }} />,
                style: { color: theme.palette.text.primary }
              }}
              InputLabelProps={{
                style: { color: theme.palette.text.primary }
              }}
              required
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              size="large"
              sx={{ py: 1.5, fontWeight: 'bold' }}
            >
              SIGN IN
            </Button>
          </Stack>
        </form>

        <Typography mt={3} textAlign="center" color={theme.palette.text.primary}>
          Don't have an account?{' '}
          <Link href="/signup" underline="hover" sx={{ color: theme.palette.secondary.light, cursor: 'pointer' }}>
            Create one
          </Link>
        </Typography>

        <Divider sx={{ my: 3, borderColor: 'rgba(255,255,255,0.3)' }}>
          <Typography variant="caption" color={theme.palette.text.primary}>
            OR
          </Typography>
        </Divider>

        <Stack direction="row" spacing={2} justifyContent="center" sx={{ mt: 2 }}>
          <Button
            variant="contained"
            startIcon={<GoogleIcon />}
            sx={{
              backgroundColor: '#fff',
              color: '#4285F4',
              boxShadow: 2,
              fontWeight: 'bold',
              borderRadius: 2,
              '&:hover': { backgroundColor: '#f0f0f0' },
              px: 3
            }}
          >
            Google
          </Button>
          <Button
            variant="contained"
            startIcon={<GitHubIcon />}
            sx={{
              backgroundColor: '#24292e',
              color: '#fff',
              boxShadow: 2,
              fontWeight: 'bold',
              borderRadius: 2,
              '&:hover': { backgroundColor: '#333' },
              px: 3
            }}
          >
            GitHub
          </Button>
        </Stack>

        <Typography mt={2} textAlign="center" color={theme.palette.text.primary} fontSize={12}>
          Login with your favorite student platform coming soon!
        </Typography>
      </Paper>
    </Box>
  );
}

export default LoginPage;
