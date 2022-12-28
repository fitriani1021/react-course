import coursesReducer from "./reducers/CoursesReducer";
import {createStore, combineReducers} from "redux";

const rootReducer = combineReducers({
    courses: coursesReducer
})

const store = createStore(rootReducer);

export default store;