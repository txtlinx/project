import { Link } from "react-router-dom";

export function Navbar(){
    return (
        <ul>
            <li>
               <Link to="/">Home</Link> 
            </li>
            <li>
               <Link to="/contacto">Contacto</Link> 
            </li>
            <li>
               <Link to="/empresa">Empresa</Link> 
            </li>
        </ul>
    )
}

export default Navbar;