import React from 'react'
import cn from 'classnames'
import { menus } from './data'
import { INavProps } from './types'
import { StyledNav } from '../../styled'
import { Button } from '../../components'
import Profile from '../../assets/marniii.jpeg'
import {
  HiTemplate,
  HiOutlineChartPie,
  HiOutlineCog,
  HiOutlineChatAlt2,
  HiOutlineUserCircle,
  HiOutlineClipboardCheck
} from 'react-icons/hi'

const Nav: React.FC<INavProps> = () => {
  return (
    <StyledNav className='Layout__Nav nav'>

      <div className='nav__header'>
        <div className='nav__header__logo'>
          <HiTemplate />
        </div>
        <p className='nav__header__name'>Portal</p>
      </div>

      <div className='nav__profile'>
        <div className='nav__profile__img'>
          <img src={Profile} alt='profile' />
        </div>
        <div className='nav__profile__details'>
          <p>MarNi Cueva</p>
          <p>marniencue...@gmail.com</p>
        </div>
      </div>

      <div className='nav__menuLists'>
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
      </div>

      <div className='nav__actions'>
        <Button
          noBaseStyle
          className='nav__action'
          icon={<HiOutlineChatAlt2 />}
        />
        <Button
          noBaseStyle
          className='nav__action'
          icon={<HiOutlineUserCircle />}
        />
        <Button
          noBaseStyle
          className='nav__action'
          icon={<HiOutlineClipboardCheck />}
        />
        <Button
          noBaseStyle
          className='nav__action'
          icon={<HiOutlineCog />}
        />
      </div>

    </StyledNav>
  );
};

export default Nav;
