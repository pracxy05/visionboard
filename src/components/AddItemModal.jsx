import React, { useState, useEffect } from 'react';
import {
  Modal,
  Box,
  Typography,
  Tabs,
  Tab,
  TextField,
  Button,
  Stack,
  MenuItem,
  Fade
} from '@mui/material';
import { useTasks } from '../store/TaskContext';
import { useHabits } from '../store/HabitContext';

const style = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  borderRadius: 3,
  boxShadow: 24,
  p: 4,
};

function AddItemModal({ open, onClose }) {
  const [tabIndex, setTabIndex] = useState(0);
  const [taskTitle, setTaskTitle] = useState('');
  const [taskCategory, setTaskCategory] = useState('Work');
  const [taskPriority, setTaskPriority] = useState('Medium');
  const [taskErrors, setTaskErrors] = useState({ title: false });

  const [habitTitle, setHabitTitle] = useState('');
  const [habitDifficulty, setHabitDifficulty] = useState('Medium');
  const [habitErrors, setHabitErrors] = useState({ title: false });

  const { addTask } = useTasks();
  const { addHabit } = useHabits();

  useEffect(() => {
    if (!open) {
      setTaskTitle('');
      setTaskCategory('Work');
      setTaskPriority('Medium');
      setTaskErrors({ title: false });
      setHabitTitle('');
      setHabitDifficulty('Medium');
      setHabitErrors({ title: false });
      setTabIndex(0);
    }
  }, [open]);

  const validateTask = () => {
    const isValid = taskTitle.trim() !== '';
    setTaskErrors({ title: !isValid });
    return isValid;
  };

  const validateHabit = () => {
    const isValid = habitTitle.trim() !== '';
    setHabitErrors({ title: !isValid });
    return isValid;
  };

  const handleTabChange = (event, newValue) => setTabIndex(newValue);
  const handleAddTask = () => {
    if (!validateTask()) return;
    addTask(taskTitle.trim());
    onClose();
  };
  const handleAddHabit = () => {
    if (!validateHabit()) return;
    addHabit(habitTitle.trim());
    onClose();
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="add-item-modal-title"
      aria-describedby="add-item-modal-description"
      closeAfterTransition
    >
      <Fade in={open}>
        <Box sx={style}>
          <Typography id="add-item-modal-title" variant="h6" component="h2" mb={2}>
            Add New {tabIndex === 0 ? 'Task' : 'Habit'}
          </Typography>
          <Tabs value={tabIndex} onChange={handleTabChange} sx={{ mb: 3 }}>
            <Tab label="Task" />
            <Tab label="Habit" />
          </Tabs>
          {tabIndex === 0 && (
            <Stack spacing={2}>
              <TextField
                label="Task Title"
                value={taskTitle}
                onChange={(e) => setTaskTitle(e.target.value)}
                fullWidth
                error={taskErrors.title}
                helperText={taskErrors.title ? "Title is required" : ''}
                onBlur={validateTask}
              />
              <TextField
                select
                label="Category"
                value={taskCategory}
                onChange={(e) => setTaskCategory(e.target.value)}
                fullWidth
              >
                {['Work', 'Study', 'Personal', 'Health'].map((category) => (
                  <MenuItem key={category} value={category}>{category}</MenuItem>
                ))}
              </TextField>
              <TextField
                select
                label="Priority"
                value={taskPriority}
                onChange={(e) => setTaskPriority(e.target.value)}
                fullWidth
              >
                {['High', 'Medium', 'Low'].map((priority) => (
                  <MenuItem key={priority} value={priority}>{priority}</MenuItem>
                ))}
              </TextField>
              <Button
                variant="contained"
                onClick={handleAddTask}
                disabled={taskTitle.trim() === ''}
                sx={{
                  transition: 'transform 0.2s',
                  '&:hover': { transform: 'scale(1.05)' },
                  fontWeight: 'bold',
                }}
              >
                Add Task
              </Button>
            </Stack>
          )}
          {tabIndex === 1 && (
            <Stack spacing={2}>
              <TextField
                label="Habit Title"
                value={habitTitle}
                onChange={(e) => setHabitTitle(e.target.value)}
                fullWidth
                error={habitErrors.title}
                helperText={habitErrors.title ? "Title is required" : ''}
                onBlur={validateHabit}
              />
              <TextField
                select
                label="Difficulty"
                value={habitDifficulty}
                onChange={(e) => setHabitDifficulty(e.target.value)}
                fullWidth
              >
                {['Easy', 'Medium', 'Hard'].map((level) => (
                  <MenuItem key={level} value={level}>{level}</MenuItem>
                ))}
              </TextField>
              <Button
                variant="contained"
                onClick={handleAddHabit}
                disabled={habitTitle.trim() === ''}
                sx={{
                  transition: 'transform 0.2s',
                  '&:hover': { transform: 'scale(1.05)' },
                  fontWeight: 'bold',
                }}
              >
                Add Habit
              </Button>
            </Stack>
          )}
        </Box>
      </Fade>
    </Modal>
  );
}

export default AddItemModal;
