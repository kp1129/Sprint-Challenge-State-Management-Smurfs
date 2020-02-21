import axios from 'axios';

export const IS_UPDATING = "IS_UPDATING";
export const UPDATE_SMURFS = "UPDATE_SMURFS";


export const fetchSmurfs = () => dispatch => {
    dispatch({type: IS_UPDATING});
    axios.get("http://localhost:3333/smurfs")
        .then(res => dispatch({type: UPDATE_SMURFS, payload: res.data}))
        .catch(err => console.log(err));
}