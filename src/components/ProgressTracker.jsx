import React from 'react';
import { Typography, Box, LinearProgress, Stack } from '@mui/material';
import DashboardCard from './DashboardCard';
import { useTasks } from '../store/TaskContext';
import { useHabits } from '../store/HabitContext';

function ProgressTracker() {
  const { tasks } = useTasks();
  const { habits } = useHabits();

  const taskCompletion = tasks.length === 0 ? 0 : (tasks.filter(t => t.completed).length / tasks.length) * 100;
  const habitCompletion = habits.length === 0 ? 0 : (habits.filter(h => h.completedToday).length / habits.length) * 100;

  return (
    <DashboardCard>
      <Typography variant="h6" fontWeight="bold" gutterBottom>
        📊 Progress Tracker
      </Typography>
      <Stack spacing={3}>
        <Box>
          <Typography gutterBottom>Tasks Completion</Typography>
          <LinearProgress variant="determinate" value={taskCompletion} sx={{ height: 10, borderRadius: 5 }} />
          <Typography mt={0.5}>{Math.round(taskCompletion)}%</Typography>
        </Box>
        <Box>
          <Typography gutterBottom>Habits Completion</Typography>
          <LinearProgress variant="determinate" value={habitCompletion} sx={{ height: 10, borderRadius: 5 }} />
          <Typography mt={0.5}>{Math.round(habitCompletion)}%</Typography>
        </Box>
      </Stack>
    </DashboardCard>
  );
}

export default ProgressTracker;
