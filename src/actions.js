import { 
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
} from './constants.js'

export const setSearchfield = (text) => ({
    //console.log(text);
    //return {
        type: CHANGE_SEARCH_FIELD,
        payload: text //Common name in Redux
    //}  
})

export const requestRobots = () => (dispatch) => { /*FUNCTION THAT RETURNS A FUNCTION  (HIGHER ORDER FX)
    and then triggers redux-thunk, sees if any actions return a function instead of  an object*/
    dispatch({ type: REQUEST_ROBOTS_PENDING });
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: data }))
        .catch(error => dispatch({ type: REQUEST_ROBOTS_FAILED, payload: error}))
}

