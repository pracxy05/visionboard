import React from 'react';
import { Box, Typography, Stack } from '@mui/material';

import HeroCard from '../components/HeroCard';
import StatsBar from '../components/StatsBar';
import TodayOverview from '../components/TodayOverview';
import ProgressTracker from '../components/ProgressTracker';
import MotivationQuote from '../components/MotivationQuote';
import AISuggestions from '../components/AISuggestions';
import Achievements from '../components/Achievements';
import FocusTimerWidget from '../components/FocusTimerWidget';
import AIChatBox from '../components/AIChatBox';

import MainLayout from '../layouts/MainLayout';

function DashboardPage() {
  const user = {
    name: 'Praharsh Andole',
    avatar: '',
    streak: 7,
    rank: 3,
  };

  const stats = {
    tasksDue: 3,
    tasksCompleted: 1,
    focusTime: 4.5,
    streak: 7,
  };

  // Standard card min height for alignment
  const cardHeight = { minHeight: 230 };

  return (
    <MainLayout>
      <Box sx={{ mb: 3 }}>
        <Typography variant="h4" fontWeight="bold" color="#b9bdc8">
          Welcome to VisionBoard Dashboard!
        </Typography>
        <Typography sx={{ color: 'gray' }}>
          Your AI-powered productivity hub is growing smarter every day.
        </Typography>
      </Box>
      {/* ROW 1: Hero */}
      <Box sx={{ mb: 3 }}>
        <HeroCard user={user} />
      </Box>
      {/* ROW 2: StatsBar */}
      <Box sx={{ mb: 3 }}>
        <StatsBar stats={stats} />
      </Box>
      {/* ROW 3: Wide Cards */}
      <Stack direction="row" spacing={3} sx={{ mb: 3 }}>
        <Box sx={{ flex: 1 }}>
          <TodayOverview sx={cardHeight} />
        </Box>
        <Box sx={{ flex: 1 }}>
          <ProgressTracker sx={cardHeight} />
        </Box>
        <Box sx={{ flex: 1 }}>
          <MotivationQuote sx={cardHeight} />
        </Box>
      </Stack>
      {/* ROW 4: Wide Cards */}
      <Stack direction="row" spacing={3} sx={{ mb: 3 }}>
        <Box sx={{ flex: 1 }}>
          <AISuggestions sx={cardHeight} />
        </Box>
        <Box sx={{ flex: 1 }}>
          <Achievements sx={cardHeight} />
        </Box>
        <Box sx={{ flex: 1 }}>
          <FocusTimerWidget sx={cardHeight} />
        </Box>
      </Stack>
      {/* ROW 5: Chatbot full width */}
      <Box sx={{ my: 3 }}>
        <AIChatBox />
      </Box>
    </MainLayout>
  );
}

export default DashboardPage;
