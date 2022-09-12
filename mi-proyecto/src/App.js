import React from "react";
import {Route, Switch} from 'react-router-dom';
import PopularMovies from './Pages/PopularMovies';
import UpcomingMovies from './Pages/UpcomingMovies'
import Favoritos from './Pages/Favoritos'
import Footer from "./Componentes/Footer/Footer"
import Navbar from './Componentes/Navbar/Navbar'
import Home from './Pages/Home'
import DetailMovie from './Pages/DetailMovie'


function App() {
  return (
   <React.Fragment>
      <Navbar/>
      <Switch>
          <Route path='/' exact={true} component={Home}/>
          <Route path='/popularmovies' component={PopularMovies}/>
          <Route path='/upcomingmovies' exact component={UpcomingMovies}/>
          <Route path='/detail/id/:id' exact component={DetailMovie}/>
          {/* <Route path='/favoritos' component={Favoritos}/> */}
        
      </Switch>
      <Footer/>

   </React.Fragment>
  
  );
}

export default App;
