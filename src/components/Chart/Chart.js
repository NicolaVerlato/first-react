import './Chart.css'
import ChartBar from './ChartBar'

function Chart(props) {
    const dataPointsValues = props.dataPoint.map(data => data.value)
    const totalMaximum = Math.max(...dataPointsValues)
    return(
        <div className='chart'>
            {props.dataPoint.map((dataPoint) => (
                <ChartBar 
                    key={dataPoint.label}
                    value={dataPoint.value}
                    maxValue={totalMaximum}
                    label={dataPoint.label}
                />
            ))}
        </div>
    )
}

export default Chart;