import React, { createContext, useContext, useState } from 'react';

const HabitContext = createContext();

export function useHabits() {
  return useContext(HabitContext);
}

export function HabitProvider({ children }) {
  const [habits, setHabits] = useState([
    { id: 1, title: 'Drink Water', streak: 0, completedToday: false },
  ]);

  const addHabit = (title) => {
    const newHabit = { id: Date.now(), title, streak: 0, completedToday: false };
    setHabits(prev => [newHabit, ...prev]);
  };

  const toggleHabit = (id) => {
    setHabits(prev =>
      prev.map(habit => 
        habit.id === id
          ? { 
              ...habit,
              completedToday: !habit.completedToday,
              streak: habit.completedToday ? habit.streak - 1 : habit.streak + 1,
            }
          : habit
      )
    );
  };

  const resetHabits = () => {
    setHabits(prev => prev.map(habit => ({ ...habit, completedToday: false })));
  };

  return (
    <HabitContext.Provider value={{ habits, addHabit, toggleHabit, resetHabits }}>
      {children}
    </HabitContext.Provider>
  );
}
