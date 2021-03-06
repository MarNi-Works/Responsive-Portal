import styled from 'styled-components';

export const StyledLayout = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #EBEEF8;
  overflow: hidden;

  .Layout__Container {
    width: 100%;
    height: 100%;
    min-height: 100%;
    padding-left: 256px;
    overflow: hidden auto;

    main {
      width: 100%;
      height: auto;
      padding: 0.5rem;
    }
  }
`;

export const LayoutHeader = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 4rem;
  background-color: #FFFFFF;
  box-shadow: 0 5px 15px -10px rgb(0 0 0 / 10%);
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
  box-shadow: 0 5px 15px -10px rgb(0 0 0 / 10%);
`;
