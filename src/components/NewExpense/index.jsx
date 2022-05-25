import React, { useState } from 'react'
import './NewExpense.css'
import ExpenseForm from './ExpenseForm'

const NewExpense = ({ onAddExpense }) => {
  const [showAddExpense, setShowAddExpense] = useState(false);

  const toggleShowHandler = () => setShowAddExpense((prev) => !prev);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = { ...enteredExpenseData, id: Math.floor(Math.random() * 100000).toString() };
    onAddExpense(expenseData)
  }
  return (
    <div className='new-expense'>
      {
        showAddExpense
          ? <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancelAdd={toggleShowHandler} />
          : <button onClick={toggleShowHandler}>Add Expense</button>
      }
    </div>
  )
}

export default NewExpense