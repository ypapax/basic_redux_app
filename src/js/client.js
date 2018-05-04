import { createStore, combineReducers } from "redux";

const userReducer = (state={}, action) => {
    return state;
}
const tweetsReducer = (state=[], action) => { // state={} is setting default values to parameter in ES6
    return state;
}

const reducers = combineReducers(
    {
        user: userReducer,
        tweets: tweetsReducer
    }
)

const store = createStore(reducers);

store.subscribe(() => {
    console.log("store changed", store.getState());
});

store.dispatch({type: "INC", payload: {number: 10}})
store.dispatch({type: "INC", payload: {number: 11}})
store.dispatch({type: "INC", payload: {number: 12}})
store.dispatch({type: "INC", payload: {number: 13}})
store.dispatch({type: "DEC", payload: {number: 112}})