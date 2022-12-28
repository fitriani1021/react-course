import React from 'react';
import './App.css';
import {
    AddCourse, AddType, CourseList, TypeList
} from "./pages";
import courseList from "./fixtures/courseList.json";
import typeList from "./fixtures/courseType.json";

function App() {
    const [courses, setCourses] = React.useState(courseList);
    const [types, setTypes] = React.useState(typeList);
    const [nav, setNav] = React.useState("/");
    let Component;
    let props = {};

    switch (nav) {
        case "/":
            Component = CourseList;
            props = {
                ...props,
                courses
            }
            break;
        case "/add-course":
            Component = AddCourse;
            props = {
                ...props,
                setCourses: setCourses
            }
            break;
        case "/course-type":
            Component = TypeList;
            props = {
                ...props,
                types
            }
            break;
        case "/add-course-type":
            Component = AddType;
            props = {
                ...props,
                setTypes: setTypes
            }
            break;
        default:
            Component = CourseList;
            props = {
                ...props,
                courses
            }
            break;
    }

  return (
    <div className="App">
      <Component onNavigate={setNav} {...props} />
    </div>
  );
}

export default App;
