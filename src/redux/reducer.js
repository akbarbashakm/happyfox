import ActionTypes from "../constants/action-types";

export const initialState = {
  employees: {},
  activeEmp: null,
  toast: {
    isVisible: false,
    message: null
  }
};

export default function reducer(state = initialState, action) {
  let finalState = {
    ...state
  };
  const { payload, type } = action;
  switch (type) {
    case ActionTypes.SET_EMPLOYEES:
      finalState = {
        ...finalState,
        employees: {
          ...payload
        }
      }
      break;
    case ActionTypes.SET_EMPLOYEE:
      finalState = {
        ...finalState,
        activeEmp: payload || null
      }
      break;
      case ActionTypes.SET_TOAST:
        finalState = {
          ...finalState,
          toast: {
            ...payload
          }
        }
        break;
    case ActionTypes.DRAG_EMPLOYEE:
      const { currentId, newId } = payload;
      finalState = {
        ...finalState,
        employees: {
          ...finalState.employees,
          [currentId]: {
            ...finalState.employees[currentId],
            manager: newId
          }
        }
      }
      break;
    default:
      finalState = state;
  }

  return finalState;
}
