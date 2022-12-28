import React from "react";

import {StyledListGroup} from "./styles";
import CourseItem from "./components/CourseItem";

import courseList from "../../fixtures/courseList.json";
import withPaginationList from "../../hoc/withPaginationList";

const List = ({data}) => {
    return (
            <StyledListGroup>
                {data.map((item) => (
                    <CourseItem data={item} key={item?.courseId} />
                ))}
            </StyledListGroup>
    )
}

export default withPaginationList(List, {
    listData: courseList,
    label: "Course",
    navAdd: "/add-course",
    targetLabel: "Course Type",
    targetNavAdd: "/add-course-type"
});
