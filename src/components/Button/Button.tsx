import React from 'react'
import cn from 'classnames'
import { IButtonProps } from './types'
import { HiOutlineDotsHorizontal } from 'react-icons/hi'

const Button: React.FC<IButtonProps> = (props) => {
  const {
    className,
    label,
    layout = 'solid',
    noBaseStyle,
    icon,
    isLoading
  } = props

  const loadingIcon = <HiOutlineDotsHorizontal />

  const baseCls = cn('', {
    [`button button__${layout}`]: !noBaseStyle
  }, className
  )

  return (
    <button className={baseCls}>
      {isLoading ? loadingIcon : icon}
      {label}
    </button>
  )
}

export default Button
