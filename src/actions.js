import {
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
} from './constants'

export const setSearchFeild = text=>({
        type: CHANGE_SEARCH_FIELD,
        payload: text

})

export const requestRobots = ()=>(dispatch)=>{
    dispatch({type:REQUEST_ROBOTS_PENDING});
    fetch('https://api.mlab.com/api/1/databases/my-robots/collections/user?apiKey=xfW3ay9Ni7BvyLG182hhaWxl5omrGhPB')
    .then(response=>{
        return response.json();
    })
    .then(data=>dispatch({type:REQUEST_ROBOTS_SUCCESS,payload:data}))
    .catch(error=>dispatch({type:REQUEST_ROBOTS_FAILED,payload:error}))
}