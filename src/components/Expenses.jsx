import React from 'react'
import ExpenseItem from './ExpenseItem'
import Card from './Card'
import './Expenses.css'

const Expenses = ({ expenses }) => {
  return (
    <Card className='expenses'>
      {
        expenses.map((expense) => <ExpenseItem {...expense} key={expense.id} />)
      }
    </Card>
  )
}

export default Expenses