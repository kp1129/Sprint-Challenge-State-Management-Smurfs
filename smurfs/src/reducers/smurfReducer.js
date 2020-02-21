import { IS_UPDATING, UPDATE_SMURFS } from "../actions/smurfsActions";

export const initialState = {
  smurfs: [],
  isUpdating: false
};

export const smurfReducer = (state = initialState, action) => {
  switch (action.type) {
    case IS_UPDATING:
      return {
        ...state,
        isUpdating: true
      };
    case UPDATE_SMURFS:
      console.log(
        "action payload from the reducer hollllaaaaa",
        action.payload
      );
      let newSmurfArr = [];
      action.payload.map(each => {
        let newObj = {
          name: each.name,
          age: each.age,
          height: each.height,
          id: Date.now()
        };
        newSmurfArr.push(newObj);
      });

      return {
        ...state,
        isUpdating: false,
        smurfs: [...newSmurfArr]
      };

    default:
      return state;
  }
};
