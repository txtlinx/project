import './App.css';
import { HelloWord } from './components/HelloWord';
import { MiNombre } from './components/MiNombre';
import Persona from './components/Persona';
import Frase from './components/Frase';
import List from './components/List';
import Evento from './components/Evento';
import Formulario from './components/Formulario'
import Condicional from './components/evento/Condicional';
import OtraLista from './components/otraLista';

function App() {
  const nombre = 'Maria'
  const milist = 0
  const milist2 =['aee','bdqq','c11','d1/11']

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
      <OtraLista items ={milist}/>
      <OtraLista items ={milist2}/>



    </div> 
    
  )
}

export default App;
