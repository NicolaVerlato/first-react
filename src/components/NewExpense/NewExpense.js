import { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';



const NewExpense = (props) => {
    function saveExpenseData(enteredExpenseData) {
      const expenseData = {
          ...enteredExpenseData,
          id: Math.random().toString()
      }
      props.onAddExpense(expenseData)
      setIsEditing(false)
    }

  const [isEditing, setIsEditing] = useState(false);
  function showForm() {
    setIsEditing(true)
  }
  function hideForm() {
    setIsEditing(false)
  }

  return (
    <div className='new-expense'>
      {!isEditing && <button type='text' onClick={showForm}>Add New Expense</button>}
      {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseData} onCancel={hideForm}/> }
    </div>
  );
};

export default NewExpense;