import React from 'react'
import styled from 'styled-components'
import { Button } from '../../../components'
import { HiOutlineCog } from 'react-icons/hi'
import Profile from '../../../assets/marniii.jpeg'

const NavProfile: React.FC = () => {
  return (
    <StyledNavProfile className='nav__profile'>
      <div className='nav__profile__img'>
        <img src={Profile} alt='profile' />
        <Button
          noBaseStyle
          className='nav__profile__settings'
          icon={<HiOutlineCog />}
        />
      </div>
      <div className='nav__profile__details'>
        <p>MarNi Cueva</p>
        <p>marniencue...@gmail.com</p>
      </div>
    </StyledNavProfile>
  )
}

export default NavProfile

const StyledNavProfile = styled.div`
  &.nav__profile {
    position: relative;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 0.5rem;
    min-height: 6rem;
    padding: 1rem;
    background-color: rgb(235 238 248 / 40%);

    .nav__profile__img {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        width: 4rem;
        height: 4rem;
        padding: 0.25rem;
        border-radius: 50%;
        background-color: #FFFFFF;
        border: 0.25rem solid #E5E9F5;
      }
    }

    .nav__profile__settings {
      position: absolute;
      top: 0.75rem;
      right: 0.75rem;
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

    .nav__profile__details {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;

      p {
        &:last-child {
          font-size: 11px;
          color: #6E7384;
        }
      }
    }
  }
`