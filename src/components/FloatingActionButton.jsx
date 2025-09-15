import React, { useState } from 'react';
import { Fab, Tooltip } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import AddItemModal from './AddItemModal';
import { useTheme } from '@mui/material/styles';

function FloatingActionButton() {
  const [open, setOpen] = useState(false);
  const theme = useTheme();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Tooltip title="Add Task or Habit" arrow>
        <Fab
          color="primary"
          aria-label="add"
          onClick={handleOpen}
          sx={{
            position: 'fixed',
            bottom: 32,
            right: 32,
            zIndex: (theme) => theme.zIndex.drawer + 10,
            boxShadow: `0 4px 12px ${
              theme.palette.mode === 'dark' ? '#39FF14AA' : '#667eea88'
            }`,
            '&:hover': {
              boxShadow: `0 8px 24px ${
                theme.palette.mode === 'dark' ? '#39FF14CC' : '#667eeacc'
              }`,
              transform: 'scale(1.1)',
              transition: 'all 0.3s ease-in-out',
            },
            transition: 'box-shadow 0.3s ease-in-out',
          }}
        >
          <AddIcon fontSize="large" />
        </Fab>
      </Tooltip>

      <AddItemModal open={open} onClose={handleClose} />
    </>
  );
}

export default FloatingActionButton;
