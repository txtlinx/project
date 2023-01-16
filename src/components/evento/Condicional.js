import {useState} from 'react'

export function Condicional(){
    const [email, setEmail] = useState()
    const [userEmail, setUserEmail] = useState()

    function enviarMail(e){
        e.preventDefault();
        setUserEmail(email)
    }
    const limiar = () => setUserEmail('')
    return(
        <>
        <h2>Registre su Email</h2>
        <form>
            <input type="emial" placeholder='EMAIL' onChange={(e)=> setEmail(e.target.value)}/>
        <button onClick={enviarMail}>ENVIAR MAIL</button>
        {userEmail && (
            <>
             <p>
                El email de usuario es: {userEmail}
             </p>
             <button onClick={limiar}>Limpiar EMAIL</button>
            </>
        )}
        </form>
        </>
    )
}

export default Condicional