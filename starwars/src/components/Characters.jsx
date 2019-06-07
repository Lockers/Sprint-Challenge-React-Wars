import React from 'react'
import Char from './Char'


const Characters = props => {
    return (
        <div>
            {
                props.characterData.map(char => {
                    return <Char key={char.created} char={char} />
                })
            }
            
            
        </div>
        )
    }
    
export default Characters