import React, { createContext, useContext, useEffect, useState } from 'react';
import { useTasks } from './TaskContext';
import { useHabits } from './HabitContext';

const AIContext = createContext();

export function useAI() {
  return useContext(AIContext);
}

const tipsPool = [
  "Prioritize your urgent tasks first to maintain focus.",
  "Take short breaks after every 90 minutes of work to recharge.",
  "Try batching similar tasks together for efficiency.",
  "Celebrate small wins to keep motivation high.",
  "Avoid multitasking; focus on completing one task at a time.",
  "Track your habit streaks daily to build consistency.",
  "Use reminders strategically, not excessively."
];

export function AIProvider({ children }) {
  const { tasks } = useTasks();
  const { habits } = useHabits();
  const [tips, setTips] = useState([]);

  useEffect(() => {
    // Simple rules-based tips demo:
    let newTips = [];

    if (tasks.length === 0) {
      newTips.push("Add some tasks to get started on your productivity journey.");
    } else {
      const incompleteTasks = tasks.filter(t => !t.completed).length;
      if (incompleteTasks > 5) newTips.push("You have many tasks pending — try prioritizing top 3!");

      if (habits.length > 0) {
        const lowStreakHabits = habits.filter(h => h.streak < 3).length;
        if (lowStreakHabits > 0) newTips.push("Focus on building habit consistency for better results.");

        if (habits.filter(h => h.completedToday).length === 0) newTips.push("Complete at least one habit today to maintain momentum.");
      }
    }

    // Fill remaining tips from pool randomly
    while (newTips.length < 3) {
      const randomTip = tipsPool[Math.floor(Math.random() * tipsPool.length)];
      if (!newTips.includes(randomTip)) newTips.push(randomTip);
    }

    setTips(newTips);
  }, [tasks, habits]);

  return (
    <AIContext.Provider value={{ tips }}>
      {children}
    </AIContext.Provider>
  );
}
