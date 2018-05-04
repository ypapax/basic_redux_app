import { applyMiddleware, createStore } from "redux";

const reducer = function(state, action) {
    if (action.type === "INC") {
        return state+action.number;
    }
    if (action.type === "DEC") {
        return state-action.number;
    }
    return state;
}

// multiple arrows means that each time we return a function.
// https://stackoverflow.com/a/32787782/1024794
const logger = (store) => (next) => (action) => {
    console.log("action fired", action);
}

const middleware = applyMiddleware(logger);

const store = createStore(reducer, 1, middleware);

store.subscribe(() => {
    console.log("store changed", store.getState());
});

store.dispatch({type: "INC", number: 10})
store.dispatch({type: "INC", number: 11})
store.dispatch({type: "INC", number: 12})
store.dispatch({type: "INC", number: 13})
store.dispatch({type: "DEC", number: 112})