import React from 'react'
import cn from 'classnames'
import { menus } from './data'
import { INavProps } from './types'
import { StyledNav } from '../../styled'
import { Button } from '../../components'
import { HiOutlineChartPie } from 'react-icons/hi'

const Nav: React.FC<INavProps> = () => {
  return (
    <StyledNav className='Layout__Nav nav'>
      <div className='nav__header'>
        <div className='nav__header__logo'></div>
        <p className='nav__header__name'>Branding</p>
      </div>
      <div className='nav__profile'></div>
      <ul className='nav__menu'>
        {menus.map((e) => (
          <li key={e.id} className='nav__menu__list'>
            <Button
              className={cn('nav__menu__btn', { 'selected': e.selected })}
              icon={<HiOutlineChartPie />}
              label={e.label}
            />
          </li>
        ))}
      </ul>
    </StyledNav>
  );
};

export default Nav;
