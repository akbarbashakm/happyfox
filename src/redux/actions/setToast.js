/* eslint-disable import/prefer-default-export */
import Actions from '../../constants/action-types';

let INTERVAL = null;

/**
 * Drag element Api call and DB process
 * @param {*} newId 
 * @param {*} currentId 
 * @returns 
 */
export default function setToast(message) {
    clearInterval(INTERVAL);
    return dispatch => new Promise((res, rej) => {
        dispatch({
            type: Actions.SET_TOAST,
            payload: {
                isVisible: true,
                message
            }
        });
        INTERVAL = setTimeout(() => {
            dispatch({
                type: Actions.SET_TOAST,
                payload: {
                    isVisible: false,
                    message
                }
            });
        }, 3000)
    });
}