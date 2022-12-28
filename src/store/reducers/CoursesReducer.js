import dataList from '../../fixtures/courseList.json'

const initialState = {
    ...dataList
}
export const coursesReducer =(state = initialState, action) => {
    switch (action.type) {
        case 'ADD_COURSE':
            return Object.assign({}, state,{
                data:[...state.data, action.payload]
            })
        default:
            return state
    }
}