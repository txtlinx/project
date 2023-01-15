import { Item } from "./Item"
import { CompTest } from "./CompTest"

export function List(){
    return (
        <>
            <h1>List</h1>
            <ul>   
                <CompTest marca="Ferrari"/>
                <Item nombre="JEFF" marca="FORD"/>
                <Item/>
                <li>Item 1</li> 
                <li>Item 1</li> 

            </ul>

        </>
    )
}

export default List