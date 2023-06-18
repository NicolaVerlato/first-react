import { useState } from 'react';
import Expences from './components/Expenses/Expences'
import './components/Expenses/Expences.css'
import NewExpense from './components/NewExpense/NewExpense';
import Card from './components/UI/Card'

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];
function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  function newExpense(expenseData) {
    setExpenses((prevExpenses) =>{
      return [expenseData, ...prevExpenses]
    })
  }
  return (
    <div>
      <NewExpense onAddExpense={newExpense}/>
      <Card className='expenses'>
        <Expences 
          items={expenses}
        />
      </Card>
      
    </div>
  );
}

export default App;
