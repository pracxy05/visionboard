import React from 'react';
import {
  Modal,
  Box,
  Typography,
  Divider,
  Button,
  Stack,
  Fade,
  useTheme,
} from '@mui/material';

function HabitDetailsModal({ habit, open, onClose }) {
  const theme = useTheme();
  if (!habit) return null;

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="habit-details-title"
      aria-describedby="habit-details-description"
      closeAfterTransition
    >
      <Fade in={open}>
        <Box
          sx={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: theme.palette.background.paper,
            borderRadius: 3,
            boxShadow:
              theme.palette.mode === 'dark'
                ? '0 0 20px #39ff1466'
                : '0 0 20px #4caf5088',
            p: 4,
            color: theme.palette.text.primary,
          }}
        >
          <Typography id="habit-details-title" variant="h5" fontWeight="bold" mb={2}>
            {habit.title}
          </Typography>
          <Divider sx={{ bgcolor: theme.palette.mode === 'dark' ? '#39FF14' : '#4caf50', mb: 2 }} />

          <Typography variant="subtitle1" gutterBottom>
            Current Streak: <strong>{habit.streak} days</strong>
          </Typography>

          <Typography variant="body2" mb={3}>
            {habit.notes || 'No additional notes provided.'}
          </Typography>

          <Box
            sx={{
              width: 150,
              height: 150,
              borderRadius: '50%',
              background:
                theme.palette.mode === 'dark'
                  ? 'conic-gradient(#39FF14 0% 75%, #444 75% 100%)'
                  : 'conic-gradient(#4caf50 0% 75%, #ddd 75% 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 36,
              fontWeight: 'bold',
              margin: '0 auto 20px auto',
              color: theme.palette.mode === 'dark' ? '#39FF14' : '#4caf50',
              boxShadow:
                theme.palette.mode === 'dark'
                  ? '0 0 15px #39FF14'
                  : '0 0 15px #4caf50',
            }}
          >
            75%
          </Box>

          <Stack direction="row" justifyContent="space-between">
            <Button variant="contained" color="success" onClick={onClose}>
              Close
            </Button>
            <Button variant="outlined" color="primary">
              Edit Habit
            </Button>
          </Stack>
        </Box>
      </Fade>
    </Modal>
  );
}

export default HabitDetailsModal;
