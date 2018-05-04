import { createStore } from "redux";

const reducer = function(state, action) {
    if (action.command === "INC") {
        return state+action.payload;
    }
    if (action.command === "DEC") {
        return state-action.payload;
    }
    return state;
}

const store = createStore(reducer, 0); // https://youtu.be/ucd5x3Ka3gw?t=149

store.subscribe(() => {
    console.log("store changed", store.getState());
});

store.dispatch({command: "INC", payload: 10})
store.dispatch({command: "INC", payload: 11})
store.dispatch({command: "INC", payload: 12})
store.dispatch({command: "INC", payload: 13})
store.dispatch({command: "DEC", payload: 112})