import React from "react";
import Footer from "./Componentes/Footer/Footer"
import Navbar from './Componentes/Navbar/Navbar'
import Home from './Pages/Home'


function App() {
  return (
   <React.Fragment>
      <Navbar/>
      <Home/>
      <Footer/>

   </React.Fragment>
  
  );
}

export default App;
