import React from 'react'
import './Card.css'

const Card = ({producto}) => {

    const {id, nombre, imagen, precio} = producto

    return (

    <div key = {id} className='card'>
        <h2>{nombre}</h2>
        <img src={imagen} alt= "" className="card-img"/>
        <h3>{precio}</h3>
    </div>
    )
}

export default Card
