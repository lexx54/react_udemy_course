import React from 'react'
import ExpenseItem from './ExpenseItem'
import './ExpensesList.css'

const ExpensesList = ({ items }) => {
  return (
    <ul className='expenses-list'>      {
      !!items.length
        ? items.map((expense) => <ExpenseItem {...expense} key={expense.id} />)
        : <h2 className='expenses-list__fallback'>No Expense Found</h2>
    }</ul>
  )
}

export default ExpensesList