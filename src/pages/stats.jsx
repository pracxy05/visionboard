import React from 'react';
import MainLayout from '../layouts/MainLayout';
import { Typography, Grid, Paper, Box } from '@mui/material';
import { useStats } from '../store/StatsContext';
import { Doughnut, Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(ArcElement, BarElement, CategoryScale, LinearScale, Tooltip, Legend);

function StatsPage() {
  const { completedTasksCount, totalTasks, activeHabits, totalHabits, habitStreakAverage } = useStats();

  const taskCompletionData = {
    labels: ['Completed', 'Remaining'],
    datasets: [
      {
        label: 'Tasks',
        data: [completedTasksCount, totalTasks - completedTasksCount],
        backgroundColor: ['#4caf50', '#f44336'],
        hoverOffset: 10
      }
    ],
  };

  const habitStatusData = {
    labels: ['Completed Today', 'Not Completed'],
    datasets: [
      {
        label: 'Habits',
        data: [activeHabits, totalHabits - activeHabits],
        backgroundColor: ['#2196f3', '#90caf9'],
        hoverOffset: 10
      }
    ],
  };

  const streakData = {
    labels: ['Average Streak'],
    datasets: [
      {
        label: 'Days',
        data: [habitStreakAverage],
        backgroundColor: ['#ff9800'],
      },
    ],
  };

  return (
    <MainLayout>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Productivity Stats & Insights
      </Typography>

      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <Paper elevation={6} sx={{ p: 3, borderRadius: 3, textAlign: 'center' }}>
            <Typography variant="h6" gutterBottom>Task Completion</Typography>
            <Doughnut data={taskCompletionData} />
            <Typography mt={2}>
              {completedTasksCount} of {totalTasks} tasks completed
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} md={4}>
          <Paper elevation={6} sx={{ p: 3, borderRadius: 3, textAlign: 'center' }}>
            <Typography variant="h6" gutterBottom>Today's Habit Status</Typography>
            <Doughnut data={habitStatusData} />
            <Typography mt={2}>
              {activeHabits} of {totalHabits} habits completed today
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} md={4}>
          <Paper elevation={6} sx={{ p: 3, borderRadius: 3, textAlign: 'center' }}>
            <Typography variant="h6" gutterBottom>Average Habit Streak</Typography>
            <Bar data={streakData} options={{ indexAxis: 'y', scales: { x: { min: 0, max: 30 } } }} />
            <Typography mt={2}>
              Your average streak is {habitStreakAverage} days
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </MainLayout>
  );
}

export default StatsPage;
