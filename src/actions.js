import { CHANGE_SEARCH_FIELD } from './constants.js'

export const setSearchfield = (text) => {
    //console.log(text);
    return {
        type: CHANGE_SEARCH_FIELD,
        payload: text //Common name in Redux
    }
    
}

