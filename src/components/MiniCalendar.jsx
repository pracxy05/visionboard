import React from 'react';
import { Box, Typography, Grid } from '@mui/material';

const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

function MiniCalendar() {
  // Dummy data for days completed
  const completedDays = [1, 2, 3, 5, 7, 9];

  const renderDay = (dayNum) => {
    const completed = completedDays.includes(dayNum);
    return (
      <Box
        key={dayNum}
        sx={{
          width: 28,
          height: 28,
          bgcolor: completed ? '#39FF14' : '#2e2f34',
          color: completed ? '#000' : '#b9bdc8',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 'bold',
          cursor: 'default',
          boxShadow: completed ? '0 0 10px #39ff14' : 'none',
        }}
      >
        {dayNum}
      </Box>
    );
  };

  return (
    <Box sx={{ maxWidth: 240, mx: 'auto', mt: 4, mb: 2 }}>
      <Typography variant="subtitle1" fontWeight="bold" align="center" gutterBottom color="#b9bdc8">
        July 2025
      </Typography>
      <Grid container spacing={1} justifyContent="center">
        {days.map((d) => (
          <Grid item key={d} xs={1.7}>
            <Typography variant="caption" color="#b9bdc8" align="center">
              {d}
            </Typography>
          </Grid>
        ))}
        {[...Array(31).keys()].map((_, i) => (
          <Grid item key={i + 1} xs={1.7}>
            {renderDay(i + 1)}
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default MiniCalendar;
