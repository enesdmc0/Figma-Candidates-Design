import clsx from 'clsx'
import React from 'react'

interface Props {
  className: string
}

const Activities: React.FC<Props> = ({className}) => {
  return (
    <div className={clsx("", className)} >Activities</div>
  )
}

export default Activities