import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import axios from "axios";

const initialState = {
    fetching: false,
    fetched: false,
    users: [],
    error: null,
}

const reducer = function(state=initialState, action) {
    switch (action.type) {
        case "FETCH_USERS_START": {
            return {...state, fetching: true}
            break;
        }
        case "FETCH_USERS_ERROR": {
            return {...state, fetching: false, error: action.payload}
            break;
        }
        case "RECEIVE_USERS": {
            return {...state,
                fetching: false,
                fetched: true,
                users: action.payload}
            break;
        }
    }
    return state;
}

const middleware = applyMiddleware(thunk, logger);
const store = createStore(reducer, middleware);

store.dispatch((dispatch) => { // thunk middleware allows to dispatch a function
    dispatch({type: "FETCH_USERS_START"})
    axios.get("https://jsonplaceholder.typicode.com/users")
        .then((response)=>{
            dispatch({type: "RECEIVE_USERS", payload: response.data});
        })
        .catch((err)=>{
            dispatch({type: "FETCH_USERS_ERROR", payload: err});
        })
    // do something async
    dispatch({type: "BAR"})
})