import React from 'react';
import styled from 'styled-components';
import { IDashboardProps } from './types';
import { Performers, Statistics } from './components';
import { BreadCrumbs } from '../../components';
import {
  HiOutlineChartBar,
  HiOutlineChartPie,
  HiOutlineDocumentReport,
  HiOutlineShoppingCart,
  HiOutlineStar,
  HiStar
} from 'react-icons/hi';
import TopImage from '../../assets/Sean-Bean.png'

const statistic_data = [
  {
    id: 'weekly-sales',
    label: 'Weekly Sales',
    icon: <HiOutlineChartBar />,
    sales: '1369'
  },
  {
    id: 'total-sales',
    label: 'Total Sales',
    icon: <HiOutlineChartPie />,
    sales: '52,725'
  },
  {
    id: 'item-orders',
    label: 'Total Ordered Items',
    icon: <HiOutlineShoppingCart />,
    sales: '463'
  },
  {
    id: 'reports',
    label: 'Customer Reports',
    icon: <HiOutlineDocumentReport />,
    sales: '84'
  }
]

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
    img: '',
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
    img: TopImage,
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
    img: '',
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
    img: '',
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
    img: '',
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

const Dashboard: React.FC<IDashboardProps> = () => {
  return (
    <StyledDashboard className='Dashboard'>
      <BreadCrumbs label='Dashboard' />
      <Statistics data={statistic_data} />
      <Performers thead_data={thead_data} tbody_data={tbody_data} />
    </StyledDashboard>
  )
}

export default Dashboard

const StyledDashboard = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-flow: column wrap;
`