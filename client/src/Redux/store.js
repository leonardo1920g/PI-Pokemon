import { createStore, applyMiddleware, compose } from "redux"; // applyMiddleware, compose me permite mejorar o agregar modificaciones al store
import  rootReducer from "./reducer";
import thunkMiddleware from "redux-thunk";

//voy a crear el compose
const composeEnhacer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // le permite escojer quien hace el compose

const store = createStore ( // se crea el estado 
    rootReducer, //es la ruta que se va a cambiar
    composeEnhacer(applyMiddleware(thunkMiddleware)) // aplicando el middeleware thunkMiddleware: me deja hacer la req
);

export default store;