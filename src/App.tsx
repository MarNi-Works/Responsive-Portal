import React from 'react';
import { Header, Nav } from './common';
import { StyledLayout } from './styled'
import './styles.css';

function App() {
  return (
    <StyledLayout className='Layout'>
      <Nav />
      <div className='Layout__Container'>
        <Header />
        <main>
          <h2>In development!</h2>
        </main>
      </div>
    </StyledLayout>
  );
}

export default App;
