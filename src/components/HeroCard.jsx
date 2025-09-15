import React from 'react';
import { Paper, Typography, Avatar, Box, Stack } from '@mui/material';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import StarRateIcon from '@mui/icons-material/StarRate';

const heroBackgroundUrl = 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80'; // Replace with preferred image

function HeroCard({ user }) {
  return (
    <Paper
      elevation={12}
      sx={{
        position: 'relative',
        borderRadius: 3,
        overflow: 'hidden',
        color: '#fff',
        height: 200,
        display: 'flex',
        alignItems: 'center',
        p: 4,
        backgroundImage: `url(${heroBackgroundUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        mb: 3,
        boxShadow: '0 12px 24px #1a1a1a',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          backgroundColor: 'rgba(25, 25, 35, 0.75)',
          zIndex: 1,
        }}
      />
      <Stack direction="row" alignItems="center" spacing={3} sx={{ position: 'relative', zIndex: 2 }}>
        <Avatar
          alt={user.name}
          src={user.avatar}
          sx={{ width: 96, height: 96, border: '3px solid #39FF14' }}
        />
        <Box>
          <Typography variant="h5" fontWeight="bold">
            Welcome back, {user.name}!
          </Typography>
          <Typography sx={{ fontStyle: 'italic', mt: 1, color: '#8efac5' }}>
            Glad to see you again! Ask me anything.
          </Typography>
          <Stack direction="row" spacing={2} mt={2} alignItems="center">
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              <StarRateIcon sx={{ color: '#39FF14' }} />
              <Typography>Streak: {user.streak} days</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              <EmojiEventsIcon sx={{ color: '#ffbf00' }} />
              <Typography>Rank: {user.rank}</Typography>
            </Box>
          </Stack>
        </Box>
      </Stack>
    </Paper>
  );
}

export default HeroCard;
