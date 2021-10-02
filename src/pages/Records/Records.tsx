import React from 'react';
import cn from 'classnames';
import { IRecordsProps } from './types';

const Record: React.FC<IRecordsProps> = (props) => {
  const { className } = props

  return (
    <div className={cn('Record', className)}>
      <h2>Record is in development!</h2>
    </div>
  )
}

export default Record
