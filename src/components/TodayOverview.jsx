import React from 'react';
import { Typography, Stack, Box } from '@mui/material';
import DashboardCard from './DashboardCard';
import { useTasks } from '../store/TaskContext';
import { useHabits } from '../store/HabitContext';

function TodayOverview() {
  const { tasks } = useTasks();
  const { habits } = useHabits();

  const tasksDue = tasks.length;
  const tasksCompleted = tasks.filter(t => t.completed).length;
  const habitsToComplete = habits.length;
  const habitsCompleted = habits.filter(h => h.completedToday).length;

  return (
    <DashboardCard>
      <Typography variant="h6" fontWeight="bold" gutterBottom>
        📆 Today's Overview
      </Typography>
      <Stack spacing={2}>
        <Box>
          <Typography>Tasks Due: {tasksDue}</Typography>
          <Typography>Tasks Completed: {tasksCompleted}</Typography>
        </Box>
        <Box>
          <Typography>Habits To Complete: {habitsToComplete}</Typography>
          <Typography>Habits Completed: {habitsCompleted}</Typography>
        </Box>
      </Stack>
    </DashboardCard>
  );
}

export default TodayOverview;
