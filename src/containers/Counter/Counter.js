import React, { Component } from 'react';
import { connect } from 'react-redux';
import { increment } from '../../store/action';

//'connect' is a function returns a higher order component to use on the export 

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as actionTypes from '../../store/action';

class Counter extends Component {
    state = {
        counter: 0
    }

    counterChangedHandler = ( action, value ) => {
        switch ( action ) {
            case 'inc':
                this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
                break;
            case 'dec':
                this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
                break;
            case 'add':
                this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
                break;
            case 'sub':
                this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
                break;
        }
    }

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add" clicked={this.props.onAdd}  />
                <CounterControl label="Subtract" clicked={this.props.onMinus}  />
                <hr />
                <button onClick={() => this.props.onStore(this.props.ctr)} >Store Result</button>
                <ul>
                    {this.props.result.map(testing => 
                        <li key={testing.id} onClick={() => this.props.onRemove(testing.id)}>{testing.id} {testing.value}</li>
                    )}
                </ul>
            </div>
        );
    }
}


//this state here will be the state declared in the reducer.js which is the store
//this give you the counter in the global state managed my redux in the store, give as a property call 'ctr'
const mapStateToProps = state => {
    return {
        //combineReducers in index.js add one more layer which are "ctr" and "result" to access the states in counter.js and result.js
        ctr: state.ctr.counter,
        result: state.res.result
    };
};

const mapDispatchToProps = dispatch => {
    return {
        //increment has to be executed so add (), cause onece execute increment, it will return an action, because it is an action creator
        onIncrementCounter: () => dispatch(increment()),
        onDecrementCounter: () => dispatch({type: actionTypes.DECREMENT}),
        onAdd: () => dispatch({type: actionTypes.ADD, valueJJ: 5}),
        onMinus: () => dispatch({type: actionTypes.MINUS, value: 5}),
        onStore: (currentCounter) => dispatch({type: actionTypes.STORE, counter:currentCounter}),
        onRemove: (selectedNumber) => dispatch({type: actionTypes.REMOVE, value: selectedNumber})
    };
};

//two brackets mean the first function returns another function and then that returned function i called immediately
// function test(a) {
//     return function(b){
//         return a + b;
//     };
// };

// console.log(test(3)(4));

//the order for mapStateToProps and mapDispatchToProps have to follow, if there is a container whoch only needs to dispatch actions
//but doesn't need a slice of state just do  
//export default connect(null, mapDispatchToProps)(Counter);
export default connect(mapStateToProps, mapDispatchToProps)(Counter);