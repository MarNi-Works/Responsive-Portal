import React from 'react';
import { IHeaderProps } from './types';
import { StyledHeader } from '../../styled';
import { Button, Input } from '../../components';
import {
  HiOutlineBell,
  HiOutlineGlobe,
  HiOutlineMenuAlt2,
  HiOutlineSearch,
  HiOutlineUserCircle
} from 'react-icons/hi';

const Header: React.FC<IHeaderProps> = () => {
  return (
    <StyledHeader className='Layout__Header header'>
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
    </StyledHeader>
  );
};

export default Header;
