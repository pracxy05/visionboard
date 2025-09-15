import React, { useState } from 'react';
import { Badge, Box, Typography, Avatar, useTheme } from '@mui/material';

function CircularHabitCard({ habit, onClick }) {
  const theme = useTheme();
  const [pressed, setPressed] = useState(false);

  return (
    <Badge
      badgeContent={habit.streak}
      color="success"
      sx={{
        '& .MuiBadge-badge': {
          bgcolor: theme.palette.mode === 'dark' ? '#39FF14' : '#4caf50',
          color: '#000',
          fontWeight: 'bold',
          fontSize: 14,
          width: 28,
          height: 28,
          borderRadius: '50%',
          right: 6,
          top: 6,
          boxShadow:
            theme.palette.mode === 'dark'
              ? '0 0 10px #39ff1488'
              : '0 0 10px #4caf5088',
        },
      }}
    >
      <Box
        onMouseDown={() => setPressed(true)}
        onMouseUp={() => setPressed(false)}
        onMouseLeave={() => setPressed(false)}
        onClick={onClick}
        sx={{
          width: 100,
          height: 100,
          borderRadius: '50%',
          bgcolor:
            theme.palette.mode === 'dark' ? '#16181f' : '#e0f2f1',
          boxShadow:
            theme.palette.mode === 'dark'
              ? '8px 8px 15px #121214, -8px -8px 15px #323440'
              : '6px 6px 8px #b0dfdb, -6px -6px 8px #e0f2f1',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          userSelect: 'none',
          p: 1,
          transform: pressed ? 'scale(0.9)' : 'scale(1)',
          transition: 'transform 0.15s ease-in-out, box-shadow 0.2s',
          '&:hover': {
            boxShadow:
              theme.palette.mode === 'dark'
                ? '0 0 20px #39ff14'
                : '0 0 12px #4caf50',
          },
        }}
      >
        <Avatar
          src={habit.icon}
          alt={habit.title}
          sx={{
            width: 50,
            height: 50,
            bgcolor:
              theme.palette.mode === 'dark' ? '#39FF14' : '#4caf50',
          }}
          variant="circular"
        />
        <Typography
          variant="subtitle1"
          sx={{
            mt: 1,
            color: theme.palette.text.primary,
            fontWeight: 'bold',
            textAlign: 'center',
          }}
          noWrap
        >
          {habit.title}
        </Typography>
      </Box>
    </Badge>
  );
}

export default CircularHabitCard;
