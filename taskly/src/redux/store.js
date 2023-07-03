import { createStore,combineReducers } from "redux";
import taskreducer from "./reducers";


const rootreducer=combineReducers({taskreducer});


export const Store=createStore(rootreducer);