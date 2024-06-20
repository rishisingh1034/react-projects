import React, { useState, useContext } from 'react';
import { ExpenseContext } from '../context/ExpenseContext';

const Input = () => {
  const { addExpense } = useContext(ExpenseContext);

  const [input, setInput] = useState('');
  const [input2, setInput2] = useState('');

  const handleExpense = () => {
    if (input.trim() && input2.trim()) {
      const amount = parseFloat(input2);
      if (!isNaN(amount)) {
        addExpense(input, amount);
        setInput('');
        setInput2('');
      } else {
        window.alert("Please enter a valid amount");
      }
    } else {
      window.alert("Enter both Text and Amount");
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-4 w-full max-w-md mb-6">
      <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-4">Add new transaction</h2>
      <div className="mb-4">
        <label htmlFor="text" className="block text-gray-600 dark:text-gray-400 mb-2">Text</label>
        <input 
          type="text" 
          placeholder="Enter the Text..." 
          value={input} 
          onChange={(e) => setInput(e.target.value)}
          className="w-full p-2 border border-gray-300 outline-none dark:border-gray-600 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="amount" className="block text-gray-600 dark:text-gray-400 mb-2">Amount</label>
        <input 
          type="number" 
          placeholder="Enter the Amount..." 
          value={input2} 
          onChange={(e) => setInput2(e.target.value)}
          className="w-full p-2 border border-gray-300 outline-none dark:border-gray-600 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
        />
      </div>

      <button onClick={handleExpense} className="w-full bg-blue-500 outline-none dark:bg-blue-700 text-white p-2 rounded-lg hover:bg-blue-600 dark:hover:bg-blue-800 transition duration-300">
        Add Transaction
      </button>
    </div>
  );
};

export default Input;
