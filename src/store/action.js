export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const ADD = 'ADD';
export const MINUS = 'MINUS';
export const STORE = 'STORE';
export const REMOVE = 'REMOVE';

//an action creator 
export const increment = () => {
    return  {
        type: INCREMENT
    };
};