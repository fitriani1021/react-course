import React from "react";

import {StyledListGroup} from "./styles";
import CourseItem from "./components/CourseItem";
import {connect} from "react-redux";
import withPaginationList from "../../hoc/withPaginationList";
import {useDispatch} from "react-redux";
import constants from "../../constants";
import {deleteCourse} from "../../store/actions/coursesAction";

const List = ({data, onNavigate}) => {
    const dispatch = useDispatch();

    const onNavigateToEdit = (id) => () => {
        onNavigate(constants.ROUTES.EDIT_COURSE,{id});
    }

    const onDelete = (id) => () => {
        const isOk = window.confirm("Are you sure you want to delete?");
        if (isOk) {
            dispatch(deleteCourse(id));
        }
    }

    return (
            <StyledListGroup>
                {data.map((item) => (
                    <CourseItem
                        data={item}
                        key={item.courseId}
                        onNavigateToEdit={onNavigateToEdit(item.courseId)}
                        onDelete={onDelete(item.courseId)}
                    />
                ))}
            </StyledListGroup>
    )
}

const mapStateToProps = (state) => {
    return {
        listData: state.courses.courseList,
        pagination: state.courses.pagination
    }
}

export default connect(mapStateToProps)(withPaginationList(List, {
    label: "Course",
    navAdd: "/add-course"
}));
