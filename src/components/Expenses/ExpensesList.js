import ExpenceItem from './ExpenseItem' 
import './ExpensesList.css'

function ExpencesList(props) {
    if (props.items.length === 0) {
        return <h2 className='expenses-list__fallback'>Non ci sono spese</h2>
    }
    return(
        <ul className='expenses-list'>
            {props.items.map(expense => (
                <ExpenceItem 
                    key={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                />
            ))}
        </ul>
    )
}

export default ExpencesList;