import React from 'react';
import { IHeaderProps } from './types';
import { LayoutHeader } from '../../styled';
import { Button, Input } from '../../components';
import {
  HiOutlineBell,
  HiOutlineGlobe,
  HiOutlineMenuAlt2,
  HiOutlineSearch,
  HiOutlineUserCircle
} from 'react-icons/hi';
import styled from 'styled-components';

const Header: React.FC<IHeaderProps> = () => {
  return (
    <LayoutHeader className='Layout__Header header'>
      <StyledHeader className='header__content'>
        <Button
          noBaseStyle
          className='toggle-nav'
          icon={<HiOutlineMenuAlt2 />}
          onClick={() => {}}
        />
        <div className='header__actions'>
          <Input
            type='text'
            id='global-search'
            icon={<HiOutlineSearch />}
            name='search'
            placeholder='Search...'
            defaultValue=''
          />
          <div className='header__menus'>
            <Button
              noBaseStyle
              className='toggle-nav'
              icon={<HiOutlineGlobe />}
              onClick={() => {}}
            />
            <Button
              noBaseStyle
              className='toggle-nav'
              icon={<HiOutlineBell />}
              onClick={() => {}}
            />
            <Button
              noBaseStyle
              className='toggle-nav'
              icon={<HiOutlineUserCircle />}
              onClick={() => {}}
            />
          </div>
        </div>
      </StyledHeader>
    </LayoutHeader>
  );
};

export default Header;

const StyledHeader = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .toggle-nav {
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 40px;
    color: #6E7384;
    padding: 0.25rem;
    background-color: transparent;
    border-radius: 4px;
    border: none;

    &:hover {
      color: #4A5065;
      background-color: #EBEEF8;
    }
  }

  .header__actions {
    display: flex;
    align-items: center;
    flex-direction: row;
    gap: 0.5rem;
  }

  .header__menus {
    display: flex;
    align-items: center;
    flex-direction: row;
  }
`