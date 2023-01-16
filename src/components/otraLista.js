export function OtraLista({items}){
    return(
        <>
            <h1>Lista de Items</h1>
            {items.length > 0 ?(
                items.map((item, index) => {
                   return  <h1 key={index}>letra: {item}</h1>
                })) : (
                    <p>Lista con 0 elementos</p>
                )

                
            }
        
        </>
    )
}

export default OtraLista