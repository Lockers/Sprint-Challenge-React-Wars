import React from 'react'
import './StarWars.css'

const Char = props => {
    
    return (
        <div className='charCard' >
            <h1>{props.char.name}</h1>
            <p>Gender: {props.char.Gender}</p>
            <p>Height: {props.char.Height}</p>
            <p>Mass: {props.char.mass}</p>
            <p><strong>Birth Year: </strong> {props.char.birth_year}</p>
            <p><strong>Eye Color: </strong>{props.char.eye_color}</p>
            
        </div>
        
    )
}

export default Char