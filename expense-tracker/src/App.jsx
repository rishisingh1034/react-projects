import React, { useState, useEffect } from 'react';
import List from './components/List';
import Input from './components/Input';
import Balance from './components/Balance';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex flex-col items-center p-4">
      <button
        onClick={toggleDarkMode}
        className="mb-6 p-2 bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-lg"
      >
        {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      </button>
      <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-200 mb-6">Expense Tracker</h1>
      <Balance />
      <Input />
      <List />
    </div>
  );
};

export default App;
