import React from 'react';
import { Paper, Typography, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import { useAI } from '../store/AIContext';

function AIInsights() {
  const { tips } = useAI();

  return (
    <Paper elevation={6} sx={{ p: 3, borderRadius: 3, mt: 4 }}>
      <Typography variant="h6" gutterBottom fontWeight="bold">
        AI Productivity Insights
      </Typography>
      <List>
        {tips.map((tip, index) => (
          <ListItem key={index}>
            <ListItemIcon><LightbulbIcon color="warning" /></ListItemIcon>
            <ListItemText primary={tip} />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
}

export default AIInsights;
