const redux = require('redux');

// Reducer function
// Should be a pure function
// No API calls within the function
// "Same input" leads to "same output"
const counterReducer = (state = {counter: 0}, action) => {
    return {
        counter: state.counter + 1,
    };
};

// Create a store
// Executes reducer function for the first time when store is initialized
const store = redux.createStore(counterReducer);

const counterSubscriber = () => {
    "use strict";
    // Get the state from the store
    const latestState = store.getState();
    console.log(latestState);
};

// Function to be executed by Redux when ever data in store changes
store.subscribe(counterSubscriber);

// Dispatches an action
store.dispatch({ type: 'increment'});