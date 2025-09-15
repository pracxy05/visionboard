import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Import all providers you use
import { TaskProvider } from './store/TaskContext';
import { HabitProvider } from './store/HabitContext';
import { StatsProvider } from './store/StatsContext';
import { AIProvider } from './store/AIContext';
import { ThemeProvider } from './store/ThemeContext'; // If using theme switching

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <TaskProvider>
        <HabitProvider>
          <StatsProvider>
            <AIProvider>
              <App />
            </AIProvider>
          </StatsProvider>
        </HabitProvider>
      </TaskProvider>
    </ThemeProvider>
  </React.StrictMode>
);
