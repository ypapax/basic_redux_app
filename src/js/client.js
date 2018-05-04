import { createStore, combineReducers } from "redux";

const userReducer = (state={}, action) => {
    console.info("action.type", action.type);
    switch (action.type) {
        case "CHANGE_NAME": {
            // here we copy all the fields from state object
            // and rewrite name field after it https://youtu.be/gBER4Or86hE?t=394
            state = {...state, name: action.payload} // 3 dots is spread operator https://stackoverflow.com/a/31049016/1024794
            break;
        }
        case "CHANGE_AGE": {
            state = {...state, age: action.payload}
            break;
        }
    }
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

store.dispatch({type: "CHANGE_NAME", payload: "Will"})
store.dispatch({type: "CHANGE_AGE", payload: "35"})