import Button from "./evento/Button";

export function Evento(){
     function miEvento(){
        console.log('mi evento ejeuctado');
     }
     function miEvento2(){
        console.log('mi evento ejeuctado 2');
     }
     return (
        <div>
            <p>click en el boton para activar evento</p>
            <Button event={miEvento} text="nombreDelBoton evento 1"/>
            <Button event={miEvento2} text="nombreDelBoton evento 2"></Button>
        </div>
     )
}

export default Evento