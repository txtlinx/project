import PropType from 'prop-types'
export function Item({nombre, marca}){
    return(
        <>
            <li>{nombre} - {marca}</li>
        </>
    )
}

Item.prototype = {
    nombre : PropType.string.isRequired,
    marca : PropType.number.isRequired
}

Item.defaultProps = {
    nombre : 'no informada',
    marca  : 'no informada'
}