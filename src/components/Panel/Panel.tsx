import React from 'react'
import cn from 'classnames'
import styled from 'styled-components'
import { IPanelProps } from './types'

const Panel: React.FC<IPanelProps> = (props) => {
  const { className, children } = props

  return (
    <StyledPanel className={cn('Panel', className)}>
      {children}
    </StyledPanel>
  );
};

export default Panel;

const StyledPanel = styled.div`
  flex: 1;
  padding: 1rem;
  border-radius: 0.5rem;
  background-color: #FFFFFF;
  box-shadow: 0 5px 15px -10px rgba(0,0,0,0.1);
`