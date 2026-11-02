
type propsType = {
    name: string,
    price: number
}

export default function Card( {name, price}: propsType ) {
    /**
     * data: propsType
     * 
     * const {name, price} = data  :- destructuring full syntex
     */
    return (
        <div>
            <h2>{ name }</h2>
            <p>{ price }</p>
        </div>
    )
}


