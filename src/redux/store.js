import { createStore, combineReducers } from "redux";
import VisibleReducer from "./reducers/visibleReducer";

const rootReducers = combineReducers({
    visible: VisibleReducer
})

export const store = createStore(rootReducers);