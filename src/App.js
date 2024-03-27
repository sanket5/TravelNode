import logo from './logo.svg';
import './App.scss';
import Navbar from './components/navbar/navbar.component';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import HomePge from './pages/home/home.pages';
import PlaceDetails from './pages/details/details.component';

function App() {



  return (
    <div>
      <Navbar></Navbar>
        <Routes>
          <Route exact path={'/'} element={<HomePge />}></Route>
          <Route path={"/places/:name"} element={<PlaceDetails />} ></Route>
          <Route path={"/places/:name/:item"} element={<PlaceDetails />} ></Route>
        </Routes>
    </div>
  );
}

export default App;
