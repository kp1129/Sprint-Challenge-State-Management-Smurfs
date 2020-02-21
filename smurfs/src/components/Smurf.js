import React from 'react';

const Smurf = props => {
    return (
        <div className='smurf'>
            {console.log('smurf data', props.data)}
            {console.log('smurf name', props.data.name)}
            <h3>Name: {props.data.name}</h3>
            <p>Height: {props.data.height}</p>
            <p>Age: {props.data.age}</p>
        </div>
    )
}

export default Smurf;