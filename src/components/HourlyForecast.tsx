import clsx from 'clsx'
import React from 'react'

interface Props {
  className: string
}

const HourlyForecast: React.FC<Props> = ({className}) => {
  return (
    <div className={clsx("", className)}>HourlyForecast</div>
  )
}

export default HourlyForecast