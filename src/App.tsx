import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Header, Nav } from './common'
import { Dashboard, Employees, Inventory, Records, Sales } from './pages'
import { StyledLayout } from './styled'
import './styles.css';

function App() {
  return (
    <Router>
      <StyledLayout className='Layout'>
        <Nav />
        <div className='Layout__Container'>
          <Header />
          <main>
            <Switch>
              <Route path='/' exact component={Home} />
              <Route path='/dashboard' component={Dashboard} />
              <Route path='/employees' component={Employees} />
              <Route path='/inventory' component={Inventory} />
              <Route path='/records' component={Records} />
              <Route path='/sales' component={Sales} />
            </Switch>
          </main>
        </div>
      </StyledLayout>
    </Router>
  );
}

const Home = () => <Dashboard />

export default App;
