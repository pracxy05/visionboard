import React from 'react';
import { Paper, Typography, Box, Stack } from '@mui/material';
import TaskIcon from '@mui/icons-material/Task';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import TimerIcon from '@mui/icons-material/Timer';
import WhatshotIcon from '@mui/icons-material/Whatshot';

function StatsBar({ stats }) {
  return (
    <Stack direction="row" spacing={3} sx={{ mb: 3 }}>
      {[
        { label: 'Tasks Due', value: stats.tasksDue, icon: <TaskIcon color="primary" /> },
        { label: 'Tasks Completed', value: stats.tasksCompleted, icon: <CheckCircleIcon color="success" /> },
        { label: 'Focus Time', value: `${stats.focusTime} hrs`, icon: <TimerIcon color="secondary" /> },
        { label: 'Current Streak', value: `${stats.streak} days`, icon: <WhatshotIcon color="error" /> },
      ].map(({ label, value, icon }) => (
        <Paper
          key={label}
          elevation={6}
          sx={{
            flex: 1,
            p: 2,
            display: 'flex',
            alignItems: 'center',
            gap: 2,
            borderRadius: 3,
            background: '#16181f',
            color: '#b9bdc8',
            boxShadow: '6px 6px 12px #121214, -6px -6px 12px #323440',
          }}
        >
          <Box sx={{ fontSize: 32 }}>{icon}</Box>
          <Box>
            <Typography fontWeight="bold" variant="h6">{value}</Typography>
            <Typography variant="caption" sx={{ color: '#5d7c5d' }}>{label}</Typography>
          </Box>
        </Paper>
      ))}
    </Stack>
  );
}

export default StatsBar;
