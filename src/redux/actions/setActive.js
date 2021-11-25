/* eslint-disable import/prefer-default-export */
import Actions from '../../constants/action-types';

/**
 * To set the active user index value
 * @param {*} activeIndex 
 * @returns 
 */
export default function setActive(activeIndex) {
    return dispatch => new Promise((res, rej) => {
        dispatch({
            type: Actions.SET_EMPLOYEE,
            payload: activeIndex
        });
    });
}