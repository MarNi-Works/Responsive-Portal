import React from 'react';
import cn from 'classnames';
import { ISalesProps } from './types';

const Sales: React.FC<ISalesProps> = (props) => {
  const { className } = props

  return (
    <div className={cn('Sales', className)}>
      <h2>Sales is in development!</h2>
    </div>
  )
}

export default Sales
