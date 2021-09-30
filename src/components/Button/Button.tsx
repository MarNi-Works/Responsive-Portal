import React from 'react'
import cn from 'classnames'
import { IButtonProps } from './types'

const Button: React.FC<IButtonProps> = (props) => {
  const {
    className,
    label,
    layout = 'solid',
    noBaseStyle,
    icon,
    // isLoading
  } = props

  const baseCls = cn('', {
    [`button button__${layout}`]: !noBaseStyle
  }, className
  )

  return (
    <button className={baseCls}>
      {icon}
      {label}
    </button>
  )
}

export default Button
