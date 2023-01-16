export function Nombre({setNombre}){
    return (

        <>
            <h1>Digita tu nombre:</h1>
            <input type="text" placeholder="Escriba el nombre"  onChange={(e)=>setNombre(e.target.value)}></input>
        </>
    )
}

export default  Nombre