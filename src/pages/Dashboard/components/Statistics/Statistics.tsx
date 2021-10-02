import React from 'react';
import cn from 'classnames';
import styled from 'styled-components';
import { IStatisticsProps } from './types';
import { Panel } from '../../../../components';

const Statistics: React.FC<IStatisticsProps> = (props) => {
  const { className, data } = props

  return (
    <StyledStatistics className={cn('Statistics', className)}>
      {data.map((e: any) => (
        <div key={e.id} className='col-span-3'>
          <Panel key={e.id}>
            <div className='Statistics__Details'>
              <div className='Statistics__Details__Logo'>{e.icon}</div>
              <div className='Statistics__Details__Details'>
                <p>{e.sales}</p>
                <p>{e.label}</p>
              </div>
            </div>
          </Panel>
        </div>
      ))}
    </StyledStatistics>
  )
}

export default Statistics

const StyledStatistics = styled.section`
  width: 100%;
  display: flex;
  flex-flow: row wrap;

  .Statistics__Details {
    flex: 1;
    display: flex;
    flex-flow: column wrap;
    gap: 0.5rem;

    .Statistics__Details__Logo {
      svg {
        color: #657AC5;
        font-size: 1.5rem;
      }
    }

    .Statistics__Details__Details {
      p {
        &:first-child {
          font-size: 1rem;
          font-weight: 600;
        }
        &:last-child {
          color: #6E7384;
        }
      }
    }
  }
`