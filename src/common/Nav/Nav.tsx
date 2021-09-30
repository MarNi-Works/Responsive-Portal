import React from 'react'
import { menus } from './data'
import { INavProps } from './types'
import { StyledNav } from '../../styled'
import {
  NavActions,
  NavHeader,
  NavMenu,
  NavProfile
} from './components'

const Nav: React.FC<INavProps> = () => {
  return (
    <StyledNav className='Layout__Nav nav'>
      <NavHeader />
      <NavProfile />
      <NavMenu menus={menus} />
      <NavActions />
    </StyledNav>
  );
};

export default Nav;
