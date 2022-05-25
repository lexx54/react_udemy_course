import React from 'react'
import './ChartBar.css'

const ChartBar = ({ value, max, label }) => {
  let barfillHeight = '0%'

  if (value > 0) barfillHeight = Math.round((value / max) * 100) + '%'
  return (
    <div className='chart-bar'>
      <div className="chart-bar__inner">
        <div className="chart-bar__fill" style={{ height: barfillHeight }}></div>
      </div>
      <div className="chart-bart__label">{label}</div>
    </div>
  )
}

export default ChartBar