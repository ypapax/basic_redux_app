import { createStore } from "redux";

const reducer = function(state, action) {
    if (action.type === "INC") {
        return state+action.payload.number;
    }
    if (action.type === "DEC") {
        return state-action.payload.number;
    }
    return state;
}

const store = createStore(reducer, 0); // https://youtu.be/ucd5x3Ka3gw?t=149

store.subscribe(() => {
    console.log("store changed", store.getState());
});

store.dispatch({type: "INC", payload: {number: 10}})
store.dispatch({type: "INC", payload: {number: 11}})
store.dispatch({type: "INC", payload: {number: 12}})
store.dispatch({type: "INC", payload: {number: 13}})
store.dispatch({type: "DEC", payload: {number: 112}})