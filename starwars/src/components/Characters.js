import React from 'react'

const Character = props => {
    return (
        <div className="character">
            <h1>{props.charData.name}</h1>
            <div className="character-attributes">
                <ul>
                    <li>Born : {props.charData.birth_year}</li>
                    <li>Hair Color : {props.charData.hair_color}</li>
                    <li>Eye Color : {props.charData.eye_color}</li>
                    <li>Skin Color : {props.charData.skin_color}</li>
                    <li>Height : {props.charData.height}</li>
                    <li>Mass : {props.charData.mass}</li>
                    <li>Gender : {props.charData.gender}</li>
                </ul>
            </div>
        </div>
    );
};

export default Character;