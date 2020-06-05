const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
    counter: 0
}

//Reducer
//state === previous state
//whenever the state is undefine, it will take the default state "initialState"
const rootReducer = (state = initialState, action) => {
    if (action.type === 'INC_COUNTER'){
        //DONNOT do     state.counter++;    as this previous state is not immutable, this will mutate the previous state
        //this copy the previous state and counter: ... will overwrite the old value of counter
        return {
            ...state,
            counter: state.counter + 1
        };
    }

    if (action.type === 'ADD_COUNTER'){
        //DONNOT do     state.counter++;    as this previous state is not immutable, this will mutate the previous state
        return {
            ...state,
            counter: state.counter + action.value
        };
    }

    return state;
};

//Store
const store = createStore(rootReducer);
console.log(store.getState());

//Subscription
//normoally place after the store was created, and get informed for any future dispatches
//this function in the subscribe method will be executed whenever action is dispatched and mutated the store
store.subscribe(() => {
    console.log('[Subscription]', store.getState());
});

//Dispatching Action
store.dispatch({type: 'INC_COUNTER'});
store.dispatch({type: 'ADD_COUNTER', value: 10});
console.log(store.getState());



