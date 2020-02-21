import axios from 'axios';

export const GET_STARTED = "GET_STARTED";
export const UPDATE_SMURFS = "UPDATE_SMURFS";
export const CREATE_SMURF = "CREATE_SMURF";

export const getStarted = () => dispatch => {
    dispatch({type: GET_STARTED});
    axios.get("http://localhost:3333/smurfs")
        .then(res => {
            console.log(res);
            dispatch({type: UPDATE_SMURFS, payload: res.data});        
        })
        .catch(err => console.log(err));

}

export const createSmurf = newSmurf => {
    return({type: CREATE_SMURF, payload: newSmurf})
}