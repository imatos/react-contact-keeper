import { REGISTER_SUCCESS, REGISTER_FAIL, CLEAR_ERRORS } from '../types';

const AlertReducer = (state, action) => {
  switch (action.type) {
    case REGISTER_SUCCESS:
      const token = action.payload.token;
      localStorage.setItem('token', token);
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        loading: false,
      };
    case REGISTER_FAIL:
      return {
        ...state,
        token: null,
        user: null,
        isAuthenticated: false,
        loading: false,
        error: action.payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

export default AlertReducer;
