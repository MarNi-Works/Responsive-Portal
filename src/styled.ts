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
  border-right: 1px solid #efefef;

  .nav__header {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    width: 100%;
    height: 4rem;
    padding: 0 1rem;

    .nav__header__logo {
      width: 2.5rem;
      height: 2.5rem;
      border-radius: 50%;
      background-color: rgb(62, 89, 183);
    }

    .nav__header__name {
      font-size: 1.2rem;
      font-weight: 600;
    }
  }

  .nav__profile {
    flex: 1;
    height: 6rem;
    background-color: rgb(235 238 248 / 50%);
  }

  .nav__menu {
    display: flex;
    flex-direction: column;
    flex: 1;
    gap: 0.5rem;
    padding: 0.5rem;

    .nav__menu__list {
      display: flex;
      align-items: center;
      flex: 1;
      height: 40px;
      min-height: 40px;
    }
    
    .nav__menu__btn {
      flex: 1;
      text-align: left;
      background-color: transparent;
      border-color: transparent;

      &.selected {
        background-color: #EBEEF8;
        border-color: #EBEEF8;
        color: #3B4051;
      }

      &:hover {
        background-color: #EBEEF8;
        border-color: #EBEEF8;
      }
    }
  }
`;
