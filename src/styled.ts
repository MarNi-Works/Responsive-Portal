import styled from 'styled-components';

export const StyledLayout = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #EBEEF8;
  overflow: hidden;

  .Layout__Container {
    width: 100%;
    height: 100%;
    padding-left: 256px;
  }
`;

export const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
`;

export const StyledNav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 256px;
  height: 100%;
  background-color: white;
  border-right: 1px solid #E5E9F5;

  .nav__header {
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

  .nav__profile {
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

  .nav__menuLists {
    flex: 1;
    height: calc(100% - (7rem + 135px));
    overflow: hidden auto;
  }

  .nav__menu {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    flex: 1;
    padding: 0.5rem;
    overflow: hidden auto;

    .nav__menu__list {
      display: flex;
      align-items: center;
      flex: 1;
      height: 40px;
      min-height: 40px;
    }
    
    .nav__menu__btn {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      flex: 1;
      text-align: left;
      background-color: transparent;
      border-color: transparent;

      &.selected {
        background-color: #EBEEF8;
        border-color: #EBEEF8;
        color: #3E59B7;
      }

      &:hover {
        background-color: #EBEEF8;
        border-color: #EBEEF8;
        color: #3B4051;
      }
    }
  }

  .nav__actions {
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
      border: none;

      &:hover {
        color: #4A5065;
        background-color: #EBEEF8;
      }
    }
  }
`;
