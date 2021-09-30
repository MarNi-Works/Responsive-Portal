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
  padding: 0 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;

  &.header {
    .toggle-nav {
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

    .header__actions {
      display: flex;
      align-items: center;
      flex-direction: row;
      gap: 0.5rem;
    }
  }
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
`;
