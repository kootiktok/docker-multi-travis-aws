import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import Fib from './Fib';
import OtherPage from './OtherPage';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <Link to='/'> Homey</Link>
          <Link to='/otherpage'> Other page</Link>
        </header>
        <div>
          <Route component={Fib} exact path='/' />
          <Route component={OtherPage} exact path='/otherpage' />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
