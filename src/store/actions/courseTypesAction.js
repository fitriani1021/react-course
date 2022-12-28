import constants from "../../constants";

export const addCourseType = (courseType) => ({
    type: constants.ACTION.ADD_COURSE_TYPE,
    payload: {
        courseTypeId: Math.random().toString(36).substring(2,7),
        typeName: courseType.typeName,
    }
})