import React from 'react';
import cn from 'classnames';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Button, Input } from '../../../components';
import { HiOutlineSearch } from 'react-icons/hi';

export interface IData {
  id: string
  label: string
  link: string
}

export interface INavMenuProps {
  menus: IData[]
}

const NavMenu: React.FC<INavMenuProps> = ({ menus }) => {
  return (
    <StyledNavMenu className='nav__menuLists'>
      <div className='nav__search'>
        <Input
          type='text'
          id='search-menu'
          icon={<HiOutlineSearch />}
          name='search'
          placeholder='Search...'
          defaultValue=''
        />
      </div>

      <ul className='nav__menu'>
        {menus.map((e: any) => (
          <li key={e.id} className='nav__menu__list'>
            <NavLink to={e.link} activeClassName='active'>
              <Button
                className={cn('nav__menu__btn')}
                icon={e.icon}
                label={e.label}
              />
            </NavLink>
          </li>
        ))}
      </ul>
    </StyledNavMenu>
  )
}

export default NavMenu

const StyledNavMenu = styled.div`
  &.nav__menuLists {
    flex: 1;
    padding: 0.5rem;
    height: calc(100% - (7rem + 135px));
    overflow: hidden auto;
    
    .nav__search {
      flex: 1;
      margin-bottom: 0.5rem;
    }
  
    .nav__menu {
      flex: 1;
      gap: 0.25rem;
      display: flex;
      flex-direction: column;
      overflow: hidden auto;
  
      .nav__menu__list {
        display: flex;
        align-items: center;
        flex: 1;
      }
      
      .nav__menu__btn {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        flex: 1;
        text-align: left;
        background-color: transparent;
        border-color: transparent;
        color: #4A5065;
        
  
        &:hover {
          background-color: #EBEEF8;
          border-color: #EBEEF8;
          color: #3B4051;
        }
      }

      a {
        flex: 1;
        display: flex;
        align-items: center;
        height: 40px;
        min-height: 40px;
        text-decoration: none;

        &.active {
          .nav__menu__btn {
            background-color: #EBEEF8;
            border-color: #EBEEF8;
            color: #3E59B7;

            &:hover {
              background-color: #EBEEF8;
              border-color: #EBEEF8;
              color: #3B4051;
            }
          }
        }
      }
    }
  }
`