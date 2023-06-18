import { useState } from 'react'
import ExpenceItem from './ExpenseItem' 
import ExpensesFilter from './ExpensesFilter'

function Expences(props) {

    const [filterYear, setFilterYear] = useState('2020')

    const filterHandler = selectedYear => {
      setFilterYear(selectedYear)
    }

    return(
        <div>
          <div>
            <ExpensesFilter selected={filterYear} onChangeYear={filterHandler}/>
          </div>
            <ExpenceItem 
            title={props.items[0].title}
            amount={props.items[0].amount}
            date={props.items[0].date}
          />
          <ExpenceItem 
            title={props.items[1].title}
            amount={props.items[1].amount}
            date={props.items[1].date}
          />
          <ExpenceItem 
            title={props.items[2].title}
            amount={props.items[2].amount}
            date={props.items[2].date}
          />
          <ExpenceItem 
            title={props.items[3].title}
            amount={props.items[3].amount}
            date={props.items[3].date}
          />
        </div>
    )
}

export default Expences