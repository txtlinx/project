import './App.css';
import { HelloWord } from './components/HelloWord';
import Persona from './components/Persona';
import Frase from './components/Frase';
import List from './components/List';
import Evento from './components/Evento';
import Formulario from './components/Formulario'
import Condicional from './components/evento/Condicional';
import OtraLista from './components/otraLista';
import { useState } from 'react';
import Nombre from './components/Nombre'
import Sao from './components/Sau'
import {BrowserRouter as Router, Routes, Route }from 'react-router-dom'
import Home from './components/pages/Home'
import Contacto from './components/pages/Contacto'
import Empresa from './components/pages/Empresa'
import NavBar from './components/layout/Navbar'
import Footer from './components/layout/Footer';

function App() {

  const milist = 0
  const milist2 =['aee','bdqq','c11','d1/11']
  const  [ nombre, setNombre ] = useState()
  //aconst url = 'http://via.dddjj.com/150'
  return (
    <div className='App'>
      <HelloWord/>
      <Persona 
        nombre="Pablo"
        edad ="23"
        profesion="ing n"
        foto = "https://"/>
      <Frase/>
      <List/>
      <Evento/>
      <Formulario/>

      <Condicional/>
      <OtraLista items ={milist}/>
      <OtraLista items ={milist2}/>
      <Nombre setNombre={setNombre}></Nombre>
      <Router>
       <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
         </Routes>

        <Routes>
            <Route path="/Contacto" element={<Contacto/>}/>
         </Routes>

         <Routes>
            <Route path="/Empresa" element={<Empresa/>}/>
         </Routes>
         <Footer/>
      </Router>
     
      
    </div> 
  )
}

export default App;
