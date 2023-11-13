import clsx from 'clsx'
import React from 'react'

interface Props {
  className: string
}

const AirConditions:React.FC<Props> = ({className}) => {
  return (
    <div className={clsx("", className)} >AirConditions</div>
  )
}

export default AirConditions