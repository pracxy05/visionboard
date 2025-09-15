import React, { useState } from 'react';
import {
  Box,
  Typography,
  Chip,
  Stack,
  List,
  ListItem,
  ListItemText,
  Checkbox,
  Collapse,
  IconButton,
  TextField,
  MenuItem,
  Divider,
  Paper,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import PersonIcon from '@mui/icons-material/Person';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';

import { DndContext, closestCenter } from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

import MainLayout from '../layouts/MainLayout';
import SearchBar from '../components/SearchBar';

const categories = [
  { label: 'All', icon: null },
  { label: 'Work', icon: <WorkIcon fontSize="small" /> },
  { label: 'Study', icon: <SchoolIcon fontSize="small" /> },
  { label: 'Personal', icon: <PersonIcon fontSize="small" /> },
  { label: 'Health', icon: <HealthAndSafetyIcon fontSize="small" /> },
];

const priorities = [
  { label: 'All', color: 'default' },
  { label: 'High', color: 'error' },
  { label: 'Medium', color: 'warning' },
  { label: 'Low', color: 'success' },
];

const mockTasks = [
  {
    id: '1',
    title: 'Finish React project',
    category: 'Work',
    priority: 'High',
    dueDate: '2025-09-17',
    completed: false,
    subtasks: [
      { id: '1-1', text: 'Design UI', completed: true },
      { id: '1-2', text: 'Implement components', completed: false },
    ],
  },
  {
    id: '2',
    title: 'Read AI research paper',
    category: 'Study',
    priority: 'Medium',
    dueDate: '2025-09-18',
    completed: false,
    subtasks: [],
  },
  {
    id: '3',
    title: 'Buy groceries',
    category: 'Personal',
    priority: 'Low',
    dueDate: '2025-09-15',
    completed: true,
    subtasks: [],
  },
];

// Sortable item wrapper component
function SortableTask({ task, expandedTask, toggleExpand, toggleSubtask, getDueDateColor }) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: task.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    cursor: isDragging ? 'grabbing' : 'pointer',
    boxShadow: isDragging ? '0 0 15px #39FF14' : undefined,
  };

  return (
    <Paper
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      elevation={6}
      sx={{
        p: 3,
        borderRadius: 3,
        bgcolor: '#1f212a',
        color: '#b9bdc8',
        position: 'relative',
        cursor: 'inherit',
        boxShadow: '6px 6px 16px #121214, -6px -6px 16px #323440',
        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
        ...style,
      }}
      onClick={() => toggleExpand(task.id)}
    >
      <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={2}>
        <Stack direction="column" spacing={0.5}>
          <Typography
            variant="h6"
            sx={{
              color: task.completed ? '#5d7c5d' : 'white',
              textDecoration: task.completed ? 'line-through' : 'none',
            }}
          >
            {task.title}
          </Typography>
          <Stack direction="row" spacing={1} alignItems="center">
            <Chip
              label={task.category}
              size="small"
              sx={{ bgcolor: '#2c2f3b', color: '#b9bdc8' }}
              icon={
                categories.find((cat) => cat.label === task.category)?.icon || null
              }
            />
            <Chip
              label={task.priority}
              size="small"
              color={
                task.priority === 'High'
                  ? 'error'
                  : task.priority === 'Medium'
                  ? 'warning'
                  : 'success'
              }
            />
          </Stack>
        </Stack>
        <Stack direction="row" spacing={1} alignItems="center">
          <Typography
            variant="body2"
            sx={{ color: getDueDateColor(task.dueDate), fontWeight: 'bold' }}
          >
            Due: {task.dueDate}
          </Typography>
          <IconButton size="small" sx={{ color: '#b9bdc8' }}>
            {expandedTask === task.id ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </IconButton>
        </Stack>
      </Stack>

      <Collapse in={expandedTask === task.id} timeout="auto" unmountOnExit>
        <Divider sx={{ my: 2, borderColor: '#39FF14' }} />
        {task.subtasks.length === 0 ? (
          <Typography variant="body2" sx={{ fontStyle: 'italic', color: '#7a7d81' }}>
            No subtasks
          </Typography>
        ) : (
          <List dense>
            {task.subtasks.map((sub) => (
              <ListItem key={sub.id} disablePadding sx={{ pl: 1 }}>
                <Checkbox
                  checked={sub.completed}
                  onChange={(e) => {
                    e.stopPropagation();
                    toggleSubtask(task.id, sub.id);
                  }}
                  sx={{
                    color: '#39FF14',
                    '&.Mui-checked': { color: '#39FF14' },
                  }}
                />
                <ListItemText
                  primary={sub.text}
                  sx={{
                    color: sub.completed ? '#5d7c5d' : '#b9bdc8',
                    textDecoration: sub.completed ? 'line-through' : 'none',
                  }}
                />
              </ListItem>
            ))}
          </List>
        )}
      </Collapse>
    </Paper>
  );
}

function TasksPage() {
  const [tasks, setTasks] = useState(mockTasks);
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [priorityFilter, setPriorityFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedTask, setExpandedTask] = useState(null);

  const toggleExpand = (id) => {
    setExpandedTask((prev) => (prev === id ? null : id));
  };

  const toggleSubtask = (taskId, subtaskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId
          ? {
              ...task,
              subtasks: task.subtasks.map((sub) =>
                sub.id === subtaskId ? { ...sub, completed: !sub.completed } : sub
              ),
            }
          : task
      )
    );
  };

  const filteredTasks = tasks.filter((task) => {
    const catCheck = categoryFilter === 'All' || task.category === categoryFilter;
    const priCheck = priorityFilter === 'All' || task.priority === priorityFilter;
    const searchCheck = task.title.toLowerCase().includes(searchTerm.toLowerCase());
    return catCheck && priCheck && searchCheck;
  });

  const getDueDateColor = (dueDate) => {
    const today = new Date();
    const due = new Date(dueDate);
    const diffDays = Math.ceil((due - today) / (1000 * 60 * 60 * 24));
    if (diffDays < 0) return '#ff4c4c';
    if (diffDays <= 2) return '#ffa500';
    return '#4caf50';
  };

  function handleDragEnd(event) {
    const { active, over } = event;
    if (over && active.id !== over.id) {
      const oldIndex = filteredTasks.findIndex((t) => t.id === active.id);
      const newIndex = filteredTasks.findIndex((t) => t.id === over.id);

      // Map filteredTasks index to full tasks index
      const activeTask = filteredTasks[oldIndex];
      const newOrder = [...tasks];
      // Remove active from current position
      const activeIndexInTasks = tasks.findIndex((t) => t.id === activeTask.id);
      newOrder.splice(activeIndexInTasks, 1);
      // Insert active at new position
      const overTask = filteredTasks[newIndex];
      const overIndexInTasks = tasks.findIndex((t) => t.id === overTask.id);
      newOrder.splice(overIndexInTasks, 0, activeTask);

      setTasks(newOrder);
    }
  }

  return (
    <MainLayout>
      <Box sx={{ mb: 4, display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 2 }}>
        <Typography variant="h4" fontWeight="bold" color="#b9bdc8">
          Tasks
        </Typography>
        <SearchBar value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
      </Box>

      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3} mb={4}>
        <TextField
          select
          label="Category"
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
          sx={{ minWidth: 160 }}
          size="small"
          color="primary"
        >
          {categories.map(({ label, icon }) => (
            <MenuItem key={label} value={label}>
              <Stack direction="row" spacing={1} alignItems="center">
                {icon}
                <Typography>{label}</Typography>
              </Stack>
            </MenuItem>
          ))}
        </TextField>
        <TextField
          select
          label="Priority"
          value={priorityFilter}
          onChange={(e) => setPriorityFilter(e.target.value)}
          sx={{ minWidth: 160 }}
          size="small"
          color="primary"
        >
          {priorities.map(({ label, color }) => (
            <MenuItem key={label} value={label}>
              <Chip label={label} color={color} size="small" />
            </MenuItem>
          ))}
        </TextField>
      </Stack>

      <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <SortableContext items={filteredTasks.map((t) => t.id)} strategy={verticalListSortingStrategy}>
          <Stack spacing={2}>
            {filteredTasks.map((task) => (
              <SortableTask
                key={task.id}
                task={task}
                expandedTask={expandedTask}
                toggleExpand={toggleExpand}
                toggleSubtask={toggleSubtask}
                getDueDateColor={getDueDateColor}
              />
            ))}
          </Stack>
        </SortableContext>
      </DndContext>
    </MainLayout>
  );
}

export default TasksPage;
