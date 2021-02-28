import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import reducer from "./reducer";
import {createLogger} from "redux-logger/src";

const logger = createLogger({
    diff: true,
    collapsed: true,
})

const store = createStore(reducer, applyMiddleware(thunk, logger));

export default store;