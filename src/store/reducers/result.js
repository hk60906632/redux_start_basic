//actionType is now a javascript object has all the properties in action.js
import * as actionTypes from '../action';

const initialState = {
    result: []
}

//reducer function has to run synchronously, so cannot run asynchrnous code immediately 

const resultReducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.STORE:
            // //push manipulate the old value, so use concat which return a new array which is old array with new value
            // //push will make the state management unpredictable
            // let newState = {...state};
            // let newArray = newState.result
            // newState.result.push(state.counter);
           
            return {
                ...state,
                //although counter is not in the initialState, but in the end the two reducer are going to merge together
                result: state.result.concat({id: Date() ,value: action.counter})
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

export default resultReducer; 