import typeList from "../../fixtures/courseType.json";
import constants from "../../constants";

const {count, totalPage, page, size} = typeList;
const initialState = {
    typeList: [
        ...typeList.data
    ],
    pagination: {
        count, totalPage, page, size
    }
}
export const courseTypesReducer = (state=initialState, action) => {
    switch (action.type) {
        case constants.ACTION.ADD_COURSE_TYPE:
            return {
                ...state,
                typeList: [...state.typeList, action.payload]
            }
        default:
            return state
    }
}

export default courseTypesReducer;