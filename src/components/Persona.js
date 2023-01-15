export function Persona({nombre, edad, profesion, foto}) {
  return (
    <div>
      <img src={foto} alt={nombre} />
      <h2>Nombre: {nombre} </h2>
      <p>Edad : {edad} </p>
      <p>Profesion: {profesion} </p>
    </div>
  )
}

export default Persona;
