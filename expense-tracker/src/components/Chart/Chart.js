import React from 'react'

import ChartBar from "./ChartBar"
import "./Chart.css"

const Chart = ({ dataPoints }) => {
    const maxValue = dataPoints.reduce((acc, { value }) => value > acc ? value : acc, 0)
    return (
        <div className="chart">
            { dataPoints.map(({ value, label }, i) => <ChartBar value={value} maxValue={maxValue} label={label} key={i} />)}
        </div>
    )
}

export default Chart
