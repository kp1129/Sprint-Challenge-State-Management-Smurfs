import {GET_STARTED, UPDATE_SMURFS, CREATE_SMURF} from '../actions/smurfsActions';

export const initialState = {
    smurfs: [],
    isUpdating: false
}

export const smurfReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_STARTED:
            return {
                ...state,
                isUpdating: true
            }
        case UPDATE_SMURFS:
            console.log('action payload from the reducer hollllaaaaa', action.payload)
            // action.payload.map(each => {

            // })
            const newSmurf = {
                name: action.payload[0].name,
                age: action.payload[0].age,
                height: action.payload[0].height,
                id: Date.now()
            }
            return {
                ...state,
                isUpdating: false,
                smurfs: [
                    ...state.smurfs, newSmurf]
            }    
        case CREATE_SMURF:
            console.log('create smurf reducer block', action.payload)
            return {
                ...state,
                smurfs: [
                    ...state.smurfs, action.payload
                ]
            }
        default:
            return state;
    }
}