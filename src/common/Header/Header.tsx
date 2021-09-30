import React from 'react';
import { IHeaderProps } from './types';
import { StyledHeader } from '../../styled';
import { Button } from '../../components';
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
        <Button
          noBaseStyle
          className='toggle-nav'
          icon={<HiOutlineSearch />}
          onClick={() => {}}
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
