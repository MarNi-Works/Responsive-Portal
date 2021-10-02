import React from 'react'
import cn from 'classnames'
import styled from 'styled-components'
import { IPerformersProps } from './types'
import { Panel, Table } from '../../../../components'
import { HiOutlineStar, HiOutlineUserCircle, HiStar } from 'react-icons/hi'

const Performers: React.FC<IPerformersProps> = (props) => {
  const { className } = props

  const thead_data = [
    { id: '1', header: '' },
    { id: '2', header: 'Name' },
    { id: '3', header: 'Area' },
    { id: '4', header: 'Stars' },
    { id: '5', header: 'Points' }
  ]

  const tbody_data = [
    {
      id: '1',
      name: 'Emma Smith',
      img: <HiOutlineUserCircle />,
      rank: 'Junior',
      area: 'Mandaue City',
      stars: (
        <>
          <HiStar/> <HiStar/> <HiStar/> <HiStar/> <HiOutlineStar />
        </>
      ),
      points: '86'
    },
    {
      id: '2',
      name: 'Sean Bean',
      img: <HiOutlineUserCircle />,
      rank: 'Senior',
      area: 'Cebu City',
      stars: (
        <>
          <HiStar/> <HiStar/> <HiStar/> <HiStar/> <HiStar/>
        </>
      ),
      points: '97'
    },
    {
      id: '3',
      name: 'Brian Cox',
      img: <HiOutlineUserCircle />,
      rank: 'Junior',
      area: 'Talisay City',
      stars: (
        <>
          <HiStar/> <HiStar/> <HiStar/> <HiOutlineStar /> <HiOutlineStar />
        </>
      ),
      points: '89'
    },
    {
      id: '4',
      name: 'Francis Mitcham',
      img: <HiOutlineUserCircle />,
      rank: 'Junior',
      area: 'Toledo City',
      stars: (
        <>
          <HiStar/> <HiStar/> <HiStar/> <HiStar/> <HiOutlineStar />
        </>
      ),
      points: '81'
    },
    {
      id: '5',
      name: 'Dan Wlson',
      img: <HiOutlineUserCircle />,
      rank: 'Entry',
      area: 'Argao City',
      stars: (
        <>
          <HiStar/> <HiStar/> <HiOutlineStar /> <HiOutlineStar /> <HiOutlineStar />
        </>
      ),
      points: '65'
    },
  ]

  const TopPerformer = () => {
    // tbody_data.filter((data => data.id === data.id) => return ())
    return (
      <StyledTopPerformer>
        <div>
           Sample
        </div>
        <div>
          <p></p>
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
          <p className='panel_header'>Performer</p>
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
  }
`
const StyledTopPerformer = styled.div`
  flex: 1;
`