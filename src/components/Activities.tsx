import clsx from 'clsx'
import React from 'react'
import Icons, { IconNames } from '../utilities/icons'

interface Props {
  className: string
}

const Activities: React.FC<Props> = ({className}) => {

  const data: IconNames[] = ["Activities", "Activities1", "Activities2", "Activities3"]

  return (
    <div className={clsx("flex flex-col justify-between p-5 gap-1 ", className)} >
      <div className='flex items-center gap-1'>
        <img src={Icons.Heart} alt="Heart" />
        <span className='font-semibold text-white' >Activities in your area</span>
      </div>
      <div className='grid grid-cols-4 gap-2'>
      {data.map((value, index) => (
        <img key={index}  src={Icons[value]} alt="Activities" />
      ))}
      </div>
    </div>
  )
}

export default Activities