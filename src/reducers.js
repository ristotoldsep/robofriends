import { CHANGE_SEARCH_FIELD } from './constants.js'

const initialState = {
    searchField: ''
}

//Reducer that is a pure function! (No matter the input, always the same reliable output)
export const searchRobots = (state = initialState, action = {}) => {
    //console.log(action.type);
    switch(action.type) {
        case CHANGE_SEARCH_FIELD:
            return Object.assign({}, state, { searchField: action.payload });
            //return { ...state, searchField: action.payload} //Another destructured way!
        default:
            return state;
    }
}