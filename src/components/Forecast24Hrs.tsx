import clsx from 'clsx'
import React from 'react'


interface Props {
  className: string

}

const Forecast24Hrs: React.FC<Props> = ({className}) => {
  return (
    <div className={clsx("", className)} >Forecast24Hrs</div>
  )
}

export default Forecast24Hrs