import React, { useContext } from 'react'
import { ExpenseContext } from '../context/ExpenseContext'

const Balance = () => {
    const {balance,calculateTotalIncome,calculateTotalExpense} = useContext(ExpenseContext);
    const totalIncome = calculateTotalIncome();
    const totalExpense = calculateTotalExpense();
  return (
    <div className="bg-white dark:bg-gray-700 shadow-md rounded-lg p-4 w-full max-w-md mb-6">
    <div className="mb-4">
      <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-300">Your Balance</h2>
      <h3 className="text-xl text-gray-800 dark:text-gray-100">₹ {balance.toFixed(2)}</h3>
    </div>
    <div className="flex justify-between">
      <div className="bg-green-100 p-4 rounded-lg w-1/2 mr-2 dark:bg-green-700">
        <h2 className="text-xl font-semibold text-green-700 dark:text-green-200 ">Income</h2>
        <p className="text-lg text-green-800 dark:text-green-400">+ ₹ {totalIncome.toFixed(2)}</p>
      </div>
      <div className="bg-red-100 p-4 rounded-lg w-1/2 ml-2 dark:bg-red-700">
        <h2 className="text-xl font-semibold text-red-700 dark:text-red-300">Expense</h2>
        <p className="text-lg text-red-800 dark:text-red-400">- ₹ {Math.abs(totalExpense).toFixed(2)}</p>
      </div>
    </div>
  </div>
  )
}

export default Balance