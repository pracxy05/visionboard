import React from 'react';
import { Typography, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import DashboardCard from './DashboardCard';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import { useAI } from '../store/AIContext';

function AISuggestions() {
  const { tips } = useAI();

  return (
    <DashboardCard>
      <Typography variant="h6" fontWeight="bold" gutterBottom>
        🤖 AI Suggestions
      </Typography>
      <List dense>
        {tips.map((tip, idx) => (
          <ListItem key={idx}>
            <ListItemIcon>
              <LightbulbIcon sx={{ color: '#39FF14' }} />
            </ListItemIcon>
            <ListItemText primary={tip} />
          </ListItem>
        ))}
      </List>
    </DashboardCard>
  );
}

export default AISuggestions;
