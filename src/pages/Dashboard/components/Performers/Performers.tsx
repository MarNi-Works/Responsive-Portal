import React from 'react';
import cn from 'classnames';
import styled from 'styled-components';
import { IPerformersProps } from './types';
import { HiOutlineEye } from 'react-icons/hi';
import { Button, Image, Panel, Table } from '../../../../components';

const Performers: React.FC<IPerformersProps> = (props) => {
  const { className, thead_data, tbody_data } = props

  // PERFORMER
  const TopPerformer = () => {
    const item = tbody_data.find((data => data.id === '2'))
    return (
      <StyledTopPerformer className='performer'>
        <div className='performer__img'>
           <Image
            alt={`img`}
            src={item?.img ?? ''}
            rounded
            objectFit='cover'
           />
        </div>
        <div className='performer__details'>
          <p>{item?.name ?? ''}</p>
          <p>{item?.rank ?? ''}</p>
          <p>{item?.area ?? ''}</p>
          <div>{item?.stars ?? ''}</div>
          <p>{item?.points ?? ''}pts</p>
        </div>
        <div className='performer__actionBtn'>
          <Button
            icon={<HiOutlineEye />}
            label='View Profile'
            layout='primary'
          />
        </div>
      </StyledTopPerformer>
    )
  }

  return (
    <StyledPerformers className={cn('Performers', className)}>
      <div className='col-span-9'>
        <Panel>
          <p className='panel_header'>Top 5 Performers</p>
          <Table data={tbody_data} head={thead_data} />
        </Panel>
      </div>
      <div className='col-span-3'>
        <Panel>
          <p className='panel_header'>Congratulations!</p>
          {TopPerformer()}
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

  .panel_header {
    font-size: 1rem;
    font-weight: 600;
    margin-bottom: 1rem;
    color: #6E7384;
  }
`

const StyledTopPerformer = styled.div`
  flex: 1;

  .performer__img {
    width: 6rem;
    height: 6rem;
    margin: 1rem auto;

    img {
      width: 100%;
    }
  }

  .performer__details {
    display: flex;
    flex-direction: column;
    gap: 2px;
    margin-bottom: 2rem;

    div {
      display: flex;
      align-items: center;
      justify-content: center;

      svg {
        color: #3E59B7;
      }
    }

    p {
      text-align: center;

      &:first-child {
        font-weight: 600;
      }

      &:not(:first-child) {
        font-size: 14px;
        color: #6E7384;
      }
    }
  }

  .performer__actionBtn {
    display: flex;
    justify-content: center;
  }
`