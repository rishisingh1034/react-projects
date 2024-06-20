import React, { useContext } from 'react';
import { ExpenseContext } from '../context/ExpenseContext';

const List = () => {
  const { expenses, removeExpense } = useContext(ExpenseContext);

  return (
    <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-4 w-full max-w-md">
      <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-4">Transaction History</h2>
      {expenses.length > 0 ? (
        expenses.map((expense, index) => (
          <div key={expense.id} className="flex justify-between items-center mb-2 border-b border-gray-200 dark:border-gray-700 pb-2">
            <span className="text-gray-700 dark:text-gray-300">{expense.text}</span>
            <span className={`text-lg ${expense.amount > 0 ? 'text-green-500 dark:text-green-400' : 'text-red-500 dark:text-red-400'}`}>
              ${expense.amount.toFixed(2)}
            </span>
            <button onClick={() => removeExpense(index)} className="text-red-500 dark:text-red-400 hover:text-red-700 dark:hover:text-red-600 transition duration-300">
              Remove
            </button>
          </div>
        ))
      ) : (
        <p className="text-gray-500 dark:text-gray-400">No transactions yet.</p>
      )}
    </div>
  );
};

export default List;
