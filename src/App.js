import Expenses from "./components/Expenses";

function App() {
  const expenses = [
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
  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses expenses={expenses}/>
    </div>
  );
}

export default App;
