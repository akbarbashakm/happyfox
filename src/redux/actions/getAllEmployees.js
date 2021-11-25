/* eslint-disable import/prefer-default-export */
import Actions from '../../constants/action-types';
import Api from '../../constants/api';

/**
 * Used the get the all employees data
 * @returns Employess
 */
export default function getAllEmployees() {
    const apiUrl = `api${Api.GET_EMPLOYEE_URL}`;
    return dispatch => new Promise((res, rej) => {
        fetch(apiUrl).then(res => res.json()).then((response) => {
            dispatch({
                type: Actions.SET_EMPLOYEES,
                payload: {
                    ...response
                },
            });
        }).catch((err) => {
            dispatch({
                type: Actions.SET_EMPLOYEES,
                payload: {}
            });
        })
    });
}