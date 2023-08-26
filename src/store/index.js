 import { legacy_createStore as createStore } from "redux";
import { combineReducers } from "redux";
import {counterReducer} from "./counterReducer"
 import authReducer from "./authReducer";

const rootStore = combineReducers({counter:counterReducer,auth:authReducer});
const store = createStore(rootStore)

export default store;
