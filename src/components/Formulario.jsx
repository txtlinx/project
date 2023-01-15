import {useState} from 'react'

export function Formulario() {
    function registroUsuario(e) {
        e.preventDefault();
        console.log(name);
        console.log(password);
        console.log("usuario Registrado");
    }
    const [name, setName] = useState('Pablo')
    const [password, setPassword] = useState()
  return (
    <>
      <h1>registro de usuarios</h1>
      <form onSubmit={registroUsuario}>
        <div>
            <label htmlFor="name">Nombre:</label>
          <input type="text" id="name" name="name" value={name} placeholder="escriba su nolmbre"
          onChange={(e)=> setName(e.target.value)}/>
        </div>
        <div>
            <label htmlFor="password">Contrasena: </label>
          <input type="password"  id="password" name="password" placeholder="escriba su constrasena" onChange={(e)=>setPassword(e.target.value)}/>
        </div>
        <div>
          <input type="submit" placeholder="Registrar" />
        </div>
      </form>
    </>
  );
}

export default Formulario;
