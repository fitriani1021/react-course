import coursesReducer from "./reducers/CoursesReducer";
import {createStore, combineReducers} from "redux";
import courseTypesReducer from "./reducers/CourseTypesReducer";

const rootReducer = combineReducers({
    courses: coursesReducer,
    courseTypes: courseTypesReducer
})

const store = createStore(rootReducer);

export default store;