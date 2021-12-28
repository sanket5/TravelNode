import logo from './logo.svg';
import './App.scss';
import Navbar from './components/navbar/navbar.component';
import { Route, Router, Switch } from 'react-router-dom';
import HomePge from './pages/home/home.pages';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Switch>
        <Route exact path={'/'} component={HomePge}></Route>

      </Switch>
    </div>
  );
}

export default App;
