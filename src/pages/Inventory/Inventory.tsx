import React from 'react';
import cn from 'classnames';
import { IInventoryProps } from './types';

const Inventory: React.FC<IInventoryProps> = (props) => {
  const { className } = props

  return (
    <div className={cn('Inventory', className)}>
      <h2>Inventory is in development!</h2>
    </div>
  )
}

export default Inventory
