import './App.css';
import { HelloWord } from './components/HelloWord';
import { MiNombre } from './components/MiNombre';
import Persona from './components/Persona';
import Frase from './components/Frase';

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
    </div>
   
    
  )
}

export default App;
