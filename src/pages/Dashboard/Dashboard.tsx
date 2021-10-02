import React from 'react'
import styled from 'styled-components'
import { IDashboardProps } from './types'
import { Performers, Statistics } from './components'
import { BreadCrumbs } from '../../components'
import { HiOutlineChartBar, HiOutlineChartPie, HiOutlineDocumentReport, HiOutlineShoppingCart } from 'react-icons/hi'

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

const Dashboard: React.FC<IDashboardProps> = () => {
  return (
    <StyledDashboard className='Dashboard'>
      <BreadCrumbs label='Dashboard' />
      <Statistics data={statistic_data} />
      <Performers />
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