import React, { useState } from 'react'
import './ExpenseForm.css'

const ExpenseForm = ({ onSaveExpenseData, onCancelAdd }) => {
  const [enteredTitle, setEnteredTitle] = useState('')
  const [enteredAmount, setEnteredAmount] = useState('')
  const [enteredDate, setEnteredDate] = useState('')

  const titleChangeHandler = ({ target }) => setEnteredTitle(target.value)
  const amountChangeHandler = ({ target }) => setEnteredAmount(target.value)
  const dateChangeHandler = ({ target }) => setEnteredDate(target.value)
  const submitHandler = (e) => {
    e.preventDefault()

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate)
    }
    onSaveExpenseData(expenseData)
    setEnteredTitle('')
    setEnteredAmount('')
    setEnteredDate('')
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            onChange={titleChangeHandler}
            value={enteredTitle}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            name="amount"
            id="amount"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
            value={enteredAmount}

          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            name="date"
            id="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
            value={enteredDate}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button onClick={onCancelAdd}>Cancel</button>
        <button type='submit'>Add expense</button>
      </div>
    </form>
  )
}

export default ExpenseForm