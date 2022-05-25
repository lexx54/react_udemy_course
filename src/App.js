import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense";
const DUMMY_EXPENSES = [
  {
    title: 'Toilet paper', amount: 94.12, date: new Date(2020, 7, 14), id: 'e1'
  },
  {
    title: 'New tv', amount: 799.49, date: new Date(2021, 2, 12), id: 'e2'
  },
  {
    title: 'Car Insurance', amount: 297.64, date: new Date(2021, 2, 12), id: 'e3'
  }
]

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHander = expense => setExpenses((prev) => prev.concat(expense))
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHander} />
      <Expenses expenses={expenses}/>
    </div>
  );
}

export default App;
