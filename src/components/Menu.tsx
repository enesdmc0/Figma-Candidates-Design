import clsx from 'clsx'
import React from 'react'

interface Props {
  className: string
}

const Menu:React.FC<Props> = ({className}) => {
  return (
    <div className={clsx("", className)} >Menu</div>
  )
}

export default Menu