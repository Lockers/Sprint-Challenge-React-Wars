import React from 'react'

function Characters() {
    debugger;
    return (
        this.props.starWarsChars.map((chars) => (
            <div className='mainDiv'>
                <p>Name: {chars.name}</p>
                <p>Height: {chars.height}</p>
                <p>Gender: {chars.gender}</p>
            </div>
    ))
 )
}

export default Characters