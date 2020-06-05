//actionType is now a javascript object has all the properties in action.js
import * as actionTypes from './action';

const initialState = {
    counter: 0,
    result: []
}

const reducer = (state = initialState, action) => {
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
        
        case actionTypes.STORE:
            // //push manipulate the old value, so use concat which return a new array which is old array with new value
            // //push will make the state management unpredictable
            // let newState = {...state};
            // let newArray = newState.result
            // newState.result.push(state.counter);
           
            return {
                ...state,
                result: state.result.concat({id: Date() ,value: state.counter})
            };

            // let newArray = [...state.result];
            // newArray.push(state.counter);
            // return {
            //     ...state,
            //     result: newArray
            // };
        
        case actionTypes.REMOVE:
            const newArray = [...state.result].filter(test => test.id !== action.value);

            //filter  will return a new array while checking some condition
            return {
                ...state,
                result: newArray
            }

        default:
            return state;

    }
}

export default reducer; 