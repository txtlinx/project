import './App.css';
import { HelloWord } from './components/HelloWord';
import { MiNombre } from './components/MiNombre';
import Persona from './components/Persona';
import Frase from './components/Frase';
import List from './components/List';
import Evento from './components/Evento';
import Formulario from './components/Formulario'
import Condicional from './components/evento/Condicional';

function App() {
  const nombre = 'Maria'
 
  //aconst url = 'http://via.dddjj.com/150'
  return (
    <div className='App'>
      <HelloWord/>
      <MiNombre nombre={nombre}/>
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



    </div> 
    
  )
}

export default App;
