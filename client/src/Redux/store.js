import { createStore, applyMiddleware, compose } from "redux";
import  rootReducer from "./reducer";
import thunkMiddleware from "redux-thunk";

const composeEnhacer = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE__|| compose; // le permite escojer quien hace el compose

const store = createStore ( // se crea el estado 
    rootReducer,
    composeEnhacer(applyMiddleware(thunkMiddleware)) // thunkMiddleware me deja hacer la req
);

export default store;