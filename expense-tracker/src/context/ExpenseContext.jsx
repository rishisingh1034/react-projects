import React, { createContext, useState, useEffect } from "react";

// Create Expense Context
const ExpenseContext = createContext();

const ExpenseProvider = ({ children }) => {
  const [expenses, setExpenses] = useState(() => {

    const savedExpense = localStorage.getItem('expenses');

    return savedExpense? JSON.parse(savedExpense) : [];
  });
  const [balance, setBalance] = useState(0);

  const addExpense = (text, amount) => {
    const parsedAmount = parseFloat(amount);
    if (!isNaN(parsedAmount)) {
      const newExpense = { id: Date.now(), text, amount: parsedAmount };
      setExpenses([...expenses, newExpense]);
    } else {
      console.error("Invalid amount entered");
    }
  };

  const removeExpense = (index) => {
    setExpenses(expenses.filter((_, i) => i !== index));
  };

  useEffect(() => {
    const newBalance = expenses.reduce((total, expense) => total + expense.amount, 0);
    setBalance(newBalance);

    localStorage.setItem('expenses', JSON.stringify(expenses));
  }, [expenses]);

  const calculateTotalIncome = () => {
    return expenses.filter(expense => expense.amount > 0)
                   .reduce((total, expense) => total + expense.amount, 0);
  };

  const calculateTotalExpense = () => {
    return expenses.filter(expense => expense.amount < 0)
                   .reduce((total, expense) => total + expense.amount, 0);
  };

  return (
    <ExpenseContext.Provider value={{ expenses, addExpense, removeExpense, balance,calculateTotalIncome,calculateTotalExpense }}>
      {children}
    </ExpenseContext.Provider>
  );
};

export { ExpenseContext, ExpenseProvider };
