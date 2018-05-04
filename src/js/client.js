import { createStore } from "redux";

const reducer = function(state, action) {
    if (action.type === "INC") {
        return state+action.number;
    }
    if (action.type === "DEC") {
        return state-action.number;
    }
    return state;
}

const store = createStore(reducer, 0); // https://youtu.be/ucd5x3Ka3gw?t=149

store.subscribe(() => {
    console.log("store changed", store.getState());
});

store.dispatch({type: "INC", number: 10})
store.dispatch({type: "INC", number: 11})
store.dispatch({type: "INC", number: 12})
store.dispatch({type: "INC", number: 13})
store.dispatch({type: "DEC", number: 112})