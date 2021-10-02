import React from 'react'
import cn from 'classnames'
import styled from 'styled-components'
import { IPerformersProps } from './types'
import { Panel } from '../../../../components'

const Performers: React.FC<IPerformersProps> = (props) => {
  const { className } = props

  return (
    <StyledPerformers className={cn('Performers', className)}>
      <div className='col-span-9'>
        <Panel>
          <p>Performers</p>
          
        </Panel>
      </div>
      <div className='col-span-3'>
        <Panel>
          <p>Performers</p>
        </Panel>
      </div>
    </StyledPerformers>
  )
}

export default Performers

const StyledPerformers = styled.section`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
`