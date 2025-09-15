import React, { createContext, useContext, useEffect, useState } from 'react';
import { useTasks } from './TaskContext';
import { useHabits } from './HabitContext';

const StatsContext = createContext();

export function useStats() {
  return useContext(StatsContext);
}

export function StatsProvider({ children }) {
  const { tasks } = useTasks();
  const { habits } = useHabits();
  const [completedTasksCount, setCompletedTasksCount] = useState(0);
  const [totalTasks, setTotalTasks] = useState(0);
  const [activeHabits, setActiveHabits] = useState(0);
  const [totalHabits, setTotalHabits] = useState(0);
  const [habitStreakAverage, setHabitStreakAverage] = useState(0);

  useEffect(() => {
    setTotalTasks(tasks.length);
    setCompletedTasksCount(tasks.filter(t => t.completed).length);
    setTotalHabits(habits.length);
    setActiveHabits(habits.filter(h => h.completedToday).length);
    setHabitStreakAverage(
      habits.length ? Math.round(habits.reduce((acc, h) => acc + h.streak, 0) / habits.length) : 0
    );
  }, [tasks, habits]);

  const value = {
    completedTasksCount,
    totalTasks,
    activeHabits,
    totalHabits,
    habitStreakAverage,
  };

  return (
    <StatsContext.Provider value={value}>
      {children}
    </StatsContext.Provider>
  );
}
