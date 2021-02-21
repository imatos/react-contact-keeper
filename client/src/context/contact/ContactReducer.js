import {
  ADD_CONTACT,
  DELETE_CONTACT,
  UPDATE_CONTACT,
  SET_CURRENT_CONTACT,
  CLEAR_CURRENT_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
} from '../types';

const ContactReducer = (state, action) => {
  switch (action.type) {
    case ADD_CONTACT:
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };
    case DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter(
          (contact) => contact.id !== action.payload
        ),
      };
    case SET_CURRENT_CONTACT:
      return {
        ...state,
        current: action.payload,
      };
    case CLEAR_CURRENT_CONTACT:
      return {
        ...state,
        current: null,
      };
    default:
      return state;
  }
};

export default ContactReducer;
