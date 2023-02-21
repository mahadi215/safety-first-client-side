import { composeWithDevTools } from "@redux-devtools/extension";
import {applyMiddleware, createStore} from "redux";
// import logger from "redux-logger";
import thunk from "redux-thunk";
// import BlogsMiddleware from "./middleware/BlogsMiddleware";
import rootReducer from "./Reducers/rootReducer";

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
// console.log(rootReducer);
console.log(store.getState())
export default store;