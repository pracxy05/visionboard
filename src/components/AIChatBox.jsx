import React, { useState, useRef, useEffect } from 'react';
import { Paper, Typography, Box, TextField, Button, Stack, Divider, IconButton } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import PersonIcon from '@mui/icons-material/Person';
import { useAI } from '../store/AIContext';

function AIChatBox() {
  const { tips } = useAI(); // Use AI suggestions as mock "responses"
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hi! I\'m your productivity assistant. Ask me for tips, ideas, or motivation!' }
  ]);
  const [input, setInput] = useState('');
  const chatEndRef = useRef(null);

  // Scroll to bottom when messages update
  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  function handleSend() {
    if (!input.trim()) return;
    setMessages(prev => [
      ...prev,
      { sender: 'user', text: input }
    ]);
    // Simulate AI response with a random tip:
    const randomTip = tips[Math.floor(Math.random() * tips.length)] || "I'm here to help with productivity!";
    setTimeout(() => {
      setMessages(prev => [
        ...prev,
        { sender: 'bot', text: randomTip }
      ]);
    }, 600);
    setInput('');
  }

  return (
    <Paper
      elevation={8}
      sx={{
        p: 0,
        borderRadius: 3,
        background: '#16181f',
        color: '#b9bdc8',
        boxShadow: '8px 8px 16px #121214, -8px -8px 16px #323440',
        height: 340,
        display: 'flex',
        flexDirection: 'column',
        mt: 3
      }}
    >
      <Box sx={{ p: 2 }}>
        <Typography variant="h6" fontWeight="bold">
          <SmartToyIcon sx={{ color: '#39FF14', mb: '-5px' }} /> Productivity Chatbot
        </Typography>
        <Typography variant="caption" sx={{ color: '#5d7c5d' }}>
          Ask any question about habits, focus, or motivation!
        </Typography>
      </Box>
      <Divider sx={{ bgcolor: '#39FF14', width: '100%' }} />

      <Box sx={{
        flexGrow: 1,
        overflowY: 'auto',
        px: 2,
        pt: 1,
        pb: 0,
        display: 'flex',
        flexDirection: 'column',
        gap: 1
      }}>
        {messages.map((msg, idx) => (
          <Stack key={idx} direction="row" alignItems="flex-start" sx={{ mt: 0.5 }}>
            {msg.sender === 'bot' ?
              <SmartToyIcon sx={{ color: '#39FF14', mr: 1, mt: '2px' }} />
              :
              <PersonIcon sx={{ color: '#667eea', mr: 1, mt: '2px' }} />
            }
            <Typography
              sx={{
                background: msg.sender === 'bot' ? '#23263b' : '#31344a',
                color: msg.sender === 'bot' ? '#39FF14' : '#8efac5',
                borderRadius: 2,
                p: 1.2,
                fontSize: 14,
                boxShadow: msg.sender === 'bot'
                  ? '2px 2px 8px #39ff1422'
                  : '2px 2px 8px #667eea22'
              }}
            >
              {msg.text}
            </Typography>
          </Stack>
        ))}
        <div ref={chatEndRef} />
      </Box>
      <Divider sx={{ bgcolor: '#23263b', width: '100%' }} />
      <Box sx={{ p: 2, pt: 1, display: 'flex', alignItems: 'center', bgcolor: '#23263b', borderRadius: '0 0 12px 12px' }}>
        <TextField
          variant="outlined"
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => { if (e.key === 'Enter') handleSend(); }}
          fullWidth
          sx={{
            input: { color: 'white' },
            bgcolor: '#23263b',
            borderRadius: 2,
          }}
        />
        <IconButton color="primary" sx={{ ml: 2 }} onClick={handleSend}>
          <SendIcon />
        </IconButton>
      </Box>
    </Paper>
  );
}

export default AIChatBox;
