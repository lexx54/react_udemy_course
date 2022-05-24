import React, { useState } from 'react'
import ExpenseItem from './ExpenseItem'
import Card from '../Card'
import './Expenses.css'
import ExpensesFilter from './ExpensesFilter'

const Expenses = ({ expenses }) => {
  const [filteredYear, setFilteredYear] = useState('2020')

  const filterChangehandler = (selectedYear) => setFilteredYear(selectedYear)
  return (
    <Card className='expenses'>
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangehandler} />
      {
        expenses.map((expense) => <ExpenseItem {...expense} key={expense.id} />)
      }
    </Card>
  )
}

export default Expenses