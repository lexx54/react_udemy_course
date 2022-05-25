import React from 'react'
import ChartBar from './ChartBar'
import './Chart.css'

const Chart = ({ dataPoints }) => {
  const dataPointsValues = dataPoints.map(data => data.value)
  const totalMaximum = Math.max(...dataPointsValues)
  return (
    <div className='chart'>
      {
        dataPoints.map(({ value, label }) => (
          <ChartBar
            value={value}
            max={totalMaximum}
            label={label}
            key={label}
          />))
      }
    </div>
  )
}

export default Chart