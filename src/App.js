import React from 'react';
import './App.css';
import {
    AddCourse, AddType, CourseList, TypeList
} from "./pages";
import courseList from "./fixtures/courseList.json";
import typeList from "./fixtures/courseType.json";
import {NavBar} from "./components";
import constants from "./constants";
import EditCourse from "./pages/EditCourse";
import {Provider} from "react-redux";
import store from "./store/store";

function App() {
    const [courses, setCourses] = React.useState(courseList);
    const [types, setTypes] = React.useState(typeList);
    const [nav, setNav] = React.useState("/");
    const [params, setParams] = React.useState(null);
    let Component;
    let props = {};

    const onNavigate = (route, params = null) => {
        setNav(route);
        setParams(params);
    }

    const menu = [
        {name: "Course List", onNavigate: () => setNav(constants.ROUTES.COURSE_LIST)},
        {name: "Course Type", onNavigate: () => setNav(constants.ROUTES.COURSE_TYPE)},
    ]

    switch (nav) {
        case "/":
            Component = CourseList;
            break;
        case constants.ROUTES.ADD_COURSE:
            Component = AddCourse;
            break;
        case "/course-type":
            Component = TypeList;
            break;
        case "/add-course-type":
            Component = AddType;
            break;
        case constants.ROUTES.EDIT_COURSE:
            Component = EditCourse;
            break;
        default:
            Component = CourseList;
            break;
    }

  return (
    <Provider store={store}>
        <NavBar menu={menu} />
      <Component onNavigate={onNavigate} params={params} />
    </Provider>
  );
}

export default App;
