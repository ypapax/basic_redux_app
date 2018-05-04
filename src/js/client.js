import { createStore } from "redux";

const reducer = function() {
    return "foo";
}

const store = createStore(reducer, 0); // https://youtu.be/ucd5x3Ka3gw?t=149

store.subscribe(() => {
    console.log("store changed", store.getState());
});

store.dispatch({type: "INC", payload: 1})