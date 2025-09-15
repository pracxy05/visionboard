import React from 'react';
import { Paper, Box } from '@mui/material';

function DashboardCard({ children, sx }) {
  return (
    <Paper
      elevation={8}
      sx={{
        p: 3,
        borderRadius: 3,
        boxShadow: `8px 8px 16px #1a1a1a, -8px -8px 16px #2e2e2e`,
        background: '#16181f',
        color: '#b9bdc8',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        '&:hover': {
          transform: 'translateY(-8px)',
          boxShadow: `12px 12px 24px #121214, -12px -12px 24px #323440`,
        },
        ...sx,
      }}
    >
      <Box>{children}</Box>
    </Paper>
  );
}

export default DashboardCard;
