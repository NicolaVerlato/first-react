import { useState } from 'react'
import ExpenceItem from './ExpenseItem' 
import ExpensesFilter from './ExpensesFilter'

function Expences(props) {

    const [filterYear, setFilterYear] = useState('2020')

    const filterHandler = selectedYear => {
      setFilterYear(selectedYear)
    }

    const filteredExpenses = props.items.filter(expense => {
      return expense.date.getFullYear().toString() === filterYear
    })

    return(
        <div>
          <div>
            <ExpensesFilter selected={filterYear} onChangeYear={filterHandler}/>
          </div>
            {filteredExpenses.map(expense => (
              <ExpenceItem 
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
            ))}
          
        </div>
    )
}

export default Expences