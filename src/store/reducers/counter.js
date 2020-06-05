//actionType is now a javascript object has all the properties in action.js
import * as actionTypes from '../action';

const initialState = {
    counter: 0
}

const counterReducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.INCREMENT:
            //const newState = Object.assign({}, state);  {} is the target new empty object
            //newState.counter = state.counter + 1;
            //return newState;
            return {
                ...state,
                counter: state.counter + 1
            }
        
        case actionTypes.DECREMENT:
            return {
                ...state,
                counter: state.counter - 1
            }
        
        case actionTypes.ADD:
            return {
                ...state,
                counter: state.counter + action.valueJJ
            }
        
        case actionTypes.MINUS:
            return {
                ...state,
                counter: state.counter - action.value
            }

        default:
            return state;

    }
}

export default counterReducer; 