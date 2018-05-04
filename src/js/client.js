import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger"
const reducer = function(state, action) {

    return state;
}

const middleware = applyMiddleware(logger);
const store = createStore(reducer, middleware);

store.dispatch({type: "FOO"})