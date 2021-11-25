/* eslint-disable import/prefer-default-export */
import Actions from '../../constants/action-types';
import Api from '../../constants/api';

/**
 * Drag element Api call and DB process
 * @param {*} newId 
 * @param {*} currentId 
 * @returns 
 */
export default function dragEmployee(newId, currentId) {
    // const apiUrl = `api${Api.CHANGE_EMPLOYEE_URL}`;
    // return dispatch => new Promise((res, rej) => {
    //     fetch(apiUrl).then(res => res.json()).then((response) => {
    //         dispatch({
    //             type: Actions.SET_EMPLOYEES,
    //             payload: {
    //                 ...response
    //             },
    //         });
    //     }).catch((err) => {
    //         dispatch({
    //             type: Actions.SET_EMPLOYEES,
    //             payload: {}
    //         });
    //     })
    // });
    
    return dispatch => new Promise((res, rej) => {
        dispatch({
            type: Actions.DRAG_EMPLOYEE,
            payload: {
                currentId,
                newId
            }
        });
    });
}