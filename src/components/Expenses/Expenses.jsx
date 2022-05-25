import React, { useState } from 'react'
import Card from '../UI/Card'
import './Expenses.css'
import ExpensesChart from './ExpensesChart'
import ExpensesFilter from './ExpensesFilter'
import ExpensesList from './ExpensesList'

const Expenses = ({ expenses }) => {
  const [filteredYear, setFilteredYear] = useState('2020')

  const filterChangehandler = (selectedYear) => setFilteredYear(selectedYear)
  const filteredExpenses = expenses.filter(({ date }) => date.getFullYear() === +filteredYear)

  return (
    <Card className='expenses'>
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangehandler} />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses} />
    </Card>
  )
}

export default Expenses