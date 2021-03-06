/* eslint-disable import/prefer-default-export */
import Actions from '../../constants/action-types';

/**
 * Drag element Api call and DB process
 * @param {*} newId 
 * @param {*} currentId 
 * @returns 
 */
export default function dragEmployee(newId, currentId, message) {
    return dispatch => new Promise((res, rej) => {
        dispatch({
            type: Actions.DRAG_EMPLOYEE,
            payload: {
                currentId,
                newId
            }
        });
        dispatch({
            type: Actions.SET_TOAST,
            payload: {
                isVisible: true,
                message
            }
        });
    });
}