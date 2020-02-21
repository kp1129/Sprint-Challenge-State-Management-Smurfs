import React, {useState} from 'react';
import {connect} from 'react-redux';
import {createSmurf} from '../actions/smurfsActions';
import axios from 'axios';

const AddSmurfForm = props => {
    const [name, setName] = useState("");
    const [height, setHeight] = useState("");
    const [age, setAge] = useState(0);

    const handleNameChange = event => {
        setName(event.target.value)
    }

    const handleHeightChange = event => {
        setHeight(event.target.value)
    }

    const handleAgeChange = event => {
        setAge(event.target.value)
    }

    const handleSubmit = event => {
        event.preventDefault();
        const newSmurfData = {
            id: Date.now(),
            name: name,
            height: height,
            age: age            
        }

        axios.post("http://localhost:3333/smurfs", newSmurfData)
            .then(res => console.log('this is from the post request', res))
            .catch(err => console.log(err));

        props.createSmurf(newSmurfData);    

    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="name" value={name} onChange={handleNameChange}/>
            <input type="text" placeholder="height" value={height} onChange={handleHeightChange}/>
            <input type="text" placeholder="age" value={age} onChange={handleAgeChange}/>
            <button type='submit'>Submit</button>
        </form>
    )
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs
    }
}

export default connect(mapStateToProps, {createSmurf})(AddSmurfForm);