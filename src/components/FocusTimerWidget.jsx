import React from 'react';
import DashboardCard from './DashboardCard';
import { Typography, Button, Box } from '@mui/material';
import TimerIcon from '@mui/icons-material/Timer';

function FocusTimerWidget() {
  return (
    <DashboardCard sx={{ minHeight: 200 }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography variant="h6" fontWeight="bold">
          <TimerIcon sx={{ color: '#39FF14', mb: '-5px' }} /> Focus Timer (Pomodoro)
        </Typography>
        <Typography sx={{ mt: 2, mb: 2, color: '#5d7c5d' }}>
          Stay focused for 25min, then take a break!
        </Typography>
        <Button variant="contained" color="primary">Start</Button>
      </Box>
    </DashboardCard>
  );
}

export default FocusTimerWidget;
