import './App.css';
import { Route, useLocation } from 'react-router-dom';
import Home from './components/Home/Home';
import DetailCard from './components/DetailCard/DetailCard';
import Landing from './components/Landing/Landing';
import Form from './components/Form/Form';
import SearchName from './components/SearchName/SearchName';
import NavBar from './components/NavBar/NavBar';

function App() {
  let location = useLocation();
  return (
    <div className="App">

     {location.pathname !== '/' && <NavBar />}
      
      <Route exact path='/'>
        <Landing/>
      </Route>

      <Route exact path='/home'>
        <Home/>
      </Route>

      <Route exact path='/create'>
        <Form/>
      </Route>

      <Route exact path='/search/:name'>
        <SearchName/>
      </Route>


      <Route exact path='/countries/:id'>
        <DetailCard/>
      </Route>

    </div>
  );
}

export default App;
