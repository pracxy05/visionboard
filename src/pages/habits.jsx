import React, { useState } from 'react';
import { Box, Typography, Grid, Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

import MainLayout from '../layouts/MainLayout';
import CircularHabitCard from '../components/CircularHabitCard';
import HabitDetailsModal from '../components/HabitDetailsModal';
import MiniCalendar from '../components/MiniCalendar';

const mockHabits = [
  {
    id: '1',
    title: 'Guitar',
    icon: '', // Add icon URL or default if desired
    streak: 8,
    notes: 'Practice 30 minutes daily',
  },
  {
    id: '2',
    title: 'Meditation',
    icon: '',
    streak: 12,
    notes: 'Focus on breathing and mindfulness',
  },
  {
    id: '3',
    title: 'Coding',
    icon: '',
    streak: 15,
    notes: 'Work on personal projects',
  },
  {
    id: '4',
    title: 'Music',
    icon: '',
    streak: 7,
    notes: 'Listen and learn new instruments',
  },
];

function HabitsPage() {
  const [habits, setHabits] = useState(mockHabits);
  const [selectedHabit, setSelectedHabit] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleHabitClick = (habit) => {
    setSelectedHabit(habit);
    setModalOpen(true);
  };

  const handleClose = () => setModalOpen(false);

  return (
    <MainLayout>
      <Box sx={{ mb: 3 }}>
        <Typography variant="h4" fontWeight="bold" color="#b9bdc8" align="center" gutterBottom>
          Habit Tracker
        </Typography>
      </Box>

      <Grid container spacing={3} justifyContent="center" sx={{ px: 4 }}>
        {habits.map((habit) => (
          <Grid item key={habit.id}>
            <CircularHabitCard habit={habit} onClick={() => handleHabitClick(habit)} />
          </Grid>
        ))}
      </Grid>

      <HabitDetailsModal habit={selectedHabit} open={modalOpen} onClose={handleClose} />

      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 6 }}>
        <Fab color="primary" aria-label="add" sx={{ bgcolor: '#39FF14' }}>
          <AddIcon />
        </Fab>
      </Box>

      <MiniCalendar />
    </MainLayout>
  );
}

export default HabitsPage;
