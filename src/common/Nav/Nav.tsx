import React from 'react';
import { INavProps } from './types';
import { StyledNav } from '../../styled';
import {
  NavActions,
  NavHeader,
  NavMenu,
  NavProfile
} from './components';
import {
  HiOutlineChartBar,
  HiOutlineChartPie,
  HiOutlineClipboardList,
  HiOutlineDocumentReport,
  HiOutlineUserGroup
} from 'react-icons/hi';

const menu_data = [
  {
    id: 'dashboard',
    icon: <HiOutlineChartPie />,
    label: 'Dashboard',
    link: '/dashboard',
  },
  {
    id: 'employees',
    icon: <HiOutlineUserGroup />,
    label: 'Employees',
    link: '/employees',
  },
  {
    id: 'records',
    icon: <HiOutlineDocumentReport />,
    label: 'Records',
    link: '/records',
  },
  {
    id: 'sales',
    icon: <HiOutlineChartBar />,
    label: 'Sales',
    link: '/sales',
  },
  {
    id: 'inventory',
    icon: <HiOutlineClipboardList />,
    label: 'Inventory',
    link: '/inventory',
  }
];

const Nav: React.FC<INavProps> = () => {
  return (
    <StyledNav className='Layout__Nav nav'>
      <NavHeader />
      <NavProfile />
      <NavMenu menus={menu_data} />
      <NavActions />
    </StyledNav>
  );
};

export default Nav;
