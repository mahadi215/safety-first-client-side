import { combineReducers } from "redux";
import BlogReducer from "./BlogReducer";
import filterReducer from "./filterReducer";
import historyReducer from "./historyReducer";
import subscribeReducer from "./subscribeReducer";

const rootReducer = combineReducers({
    blog: BlogReducer,
    filters: filterReducer,
    history: historyReducer,
    subscribers: subscribeReducer
})

export default rootReducer;