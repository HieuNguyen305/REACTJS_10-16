import { createStore, applyMiddleware, compose } from "redux"
import rootReducer from "./reducer"
import thunk from "redux-thunk"

const composeEnhencers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer,
    composeEnhencers(applyMiddleware(thunk))
);
export default store;