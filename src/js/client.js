import { createStore, combineReducers } from "redux";

const userReducer = (state={}, action) => {
    switch (action.type) {
        case "CHANGE_NAME": {
            state.name = action.payload;
            break;
        }
        case "CHANGE_AGE": {
            state.age = action.payload;
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