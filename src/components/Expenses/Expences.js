import { useState } from 'react'

import ExpensesFilter from './ExpensesFilter'
import ExpencesList from './ExpensesList'

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
            <ExpencesList items={filteredExpenses}/>
        </div>
    )
}

export default Expences