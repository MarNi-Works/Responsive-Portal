import React from 'react';
import styled from 'styled-components';
import { HiTemplate } from 'react-icons/hi';

const NavHeader: React.FC = () => {
  return (
    <StyledNavHeader className='nav__header'>
      <div className='nav__header__logo'>
        <HiTemplate />
      </div>
      <p className='nav__header__name'>Portal</p>
    </StyledNavHeader>
  )
}

export default NavHeader

const StyledNavHeader = styled.div`
  &.nav__header {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    width: 100%;
    height: 4rem;
    padding: 0 1rem;

    .nav__header__logo {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 2.5rem;
      height: 2.5rem;
      border-radius: 50%;

      svg {
        color: #3E59B7;
        font-size: 2rem;
      }
    }

    .nav__header__name {
      font-size: 1.2rem;
      font-weight: 700;
      line-height: 1;
    }
  }
`