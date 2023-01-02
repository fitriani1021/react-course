import React from 'react';
import './App.css';
import {
    AddCourse, AddType, CourseList, Dashboard, TypeList
} from "./pages";
import {NavBar} from "./components";
import constants from "./constants";
import EditCourse from "./pages/EditCourse";
import {Provider} from "react-redux";
import store from "./store/store";
import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";

function Course() {
    return(
        <div>
            <h1>Course Page</h1>
            <Outlet/>
        </div>
    )
}
function CourseType() {
    return(
        <div>
            <h1>Course Type Page</h1>
            <Outlet/>
        </div>
    )
}
function Layout() {
    return(
        <div>
            <NavBar/>
            <hr/>
            <Outlet/>
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path: constants.ROUTES.DASHBOARD,
        element: <Layout/>,
        children: [
            { index: true, element: <Dashboard /> },
            { path: constants.ROUTES.COURSE_LIST, element: <Course />,
              children: [
                  { index: true, element: <CourseList />},
                  { path: constants.ROUTES.ADD_COURSE, element: <AddCourse /> }
              ]},
            { path: constants.ROUTES.COURSE_TYPE, element: <CourseType />,
              children: [
                  { index: true, element: <TypeList /> },
                  {path: constants.ROUTES.ADD_TYPE, element: <AddType /> }
              ]},
        ]
    },
    { path: "*", element: <h3>Page is not found</h3>}
])

function App() {

  return (
    <Provider store={store}>
        <RouterProvider router={appRouter} />
    </Provider>
  );
}

export default App;
