import React from 'react'
import './StarWars.css'

const Char = props => {
    
    return (
        <div className='charCard' >
            <h1><strong>Name: </strong> {props.char.name}</h1>
            <p><strong>Gender: </strong> {props.char.gender}</p>
            <p><strong>Height: </strong> {props.char.height}</p>
            <p><strong>Mass: </strong> {props.char.mass}</p>
            <p><strong>Birth Year: </strong> {props.char.birth_year}</p>
            <p><strong>Eye Color: </strong>{props.char.eye_color}</p>
            
        </div>
        
    )
}

export default Char