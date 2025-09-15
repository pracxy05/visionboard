import React, { useState, useEffect } from 'react';
import { Typography } from '@mui/material';
import DashboardCard from './DashboardCard';

const quotes = [
  "The secret of getting ahead is getting started.",
  "Don't watch the clock; do what it does. Keep going.",
  "Great things never come from comfort zones.",
  "Push yourself because no one else is going to do it for you.",
  "Success doesn’t just find you. You have to go out and get it.",
];

function MotivationQuote() {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    const today = new Date().getDate();
    setQuote(quotes[today % quotes.length]);
  }, []);

  return (
    <DashboardCard>
      <Typography variant="h6" fontWeight="bold" gutterBottom>
        💡 Motivational Quote of the Day
      </Typography>
      <Typography fontStyle="italic" sx={{ color: '#8efac5' }}>
        "{quote}"
      </Typography>
    </DashboardCard>
  );
}

export default MotivationQuote;
