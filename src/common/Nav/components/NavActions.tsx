import React from 'react';
import styled from 'styled-components';
import { Button } from '../../../components';
import {
  HiOutlineCog,
  HiOutlineChatAlt2,
  HiOutlineUserCircle,
  HiOutlineClipboardCheck,
} from 'react-icons/hi';

const NavActions: React.FC = () => {
  return (
    <StyledNavActions className='nav__actions'>
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
    </StyledNavActions>
  )
}

export default NavActions

const StyledNavActions = styled.div`
  &.nav__actions {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    height: 3rem;
    color: #3E59B7;
    background-color: rgb(235 238 248 / 40%);

    .nav__action {
      display: flex;
      align-items: center;
      justify-content: center;
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
  }
`