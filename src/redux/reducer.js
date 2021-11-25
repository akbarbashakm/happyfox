import ActionTypes from "../constants/action-types";

export const initialState = {
  employees: {},
  nodeLists: {},
  activeEmp: null,
  rootParent: null,
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
        },
        nodeLists: {
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
    case ActionTypes.SET_PARENT:
      const { employees } = state;
      let nodeLists = {};
      if (payload) {
        nodeLists[payload] = {
          ...employees[payload],
          manager: null
        }
        Object.keys(employees).map((key) => {
          if (employees[key].manager === payload) {
            nodeLists[key] = {
              ...employees[key]
            }
          }
        })
      } else {
        nodeLists = {
          ...employees
        }
      }
      finalState = {
        ...finalState,
        rootParent: payload || null,
        nodeLists: {
          ...nodeLists
        }
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
