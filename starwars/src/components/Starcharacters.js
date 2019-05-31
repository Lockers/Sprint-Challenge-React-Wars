import React from "react";
import Character from './Characters'

const Starcharacters = props => {
    return (
        <div>
            {props.charData.map(character => {
                return <Character key={character.height} charData={character} />;
            })}
        </div>
    );
};

export default Starcharacters;