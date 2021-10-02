import React from 'react';
import cn from 'classnames'
import { IEmployeesProps } from './types';

const Employees: React.FC<IEmployeesProps> = (props) => {
  const { className } = props

  return (
    <div className={cn('Employee', className)}>
      <h2>Employees is in development!</h2>
    </div>
  )
}

export default Employees
