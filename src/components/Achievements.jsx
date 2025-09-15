import React from 'react';
import { Box, Typography, Chip, Stack } from '@mui/material';
import DashboardCard from './DashboardCard';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

function Achievements() {
  const badges = [
    { label: 'Streak: 7 days', color: 'success' },
    { label: '10+ tasks', color: 'primary' },
    { label: 'Pro Level', color: 'warning' },
  ];

  return (
    <DashboardCard sx={{ minHeight: 200 }}>
      <Typography variant="h6" fontWeight="bold" mb={2}>
        <EmojiEventsIcon sx={{ color: '#ffbf00', mb: '-5px' }} /> Achievements
      </Typography>
      <Stack direction="row" spacing={1}>
        {badges.map((badge, idx) => (
          <Chip
            key={idx}
            label={badge.label}
            color={badge.color}
            sx={{ fontWeight: 'bold' }}
          />
        ))}
      </Stack>
    </DashboardCard>
  );
}

export default Achievements;
