import React, { useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ContactContext from './ContactContext';
import ContactReducer from './ContactReducer';
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  UPDATE_CONTACT,
  SET_CURRENT_CONTACT,
  CLEAR_CURRENT_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
} from '../types';

const ContactState = ({ children }) => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: 'Jill Johnson',
        email: 'jill.johnson@company.com',
        phone: '111-111-111',
        type: 'personal',
      },
      {
        id: 2,
        name: 'Sara Watson',
        email: 'sara.watson@company.com',
        phone: '222-222-222',
        type: 'professional',
      },
    ],
    current: null,
  };

  const [state, dispatch] = useReducer(ContactReducer, initialState);

  const addContact = (contact) => {
    contact.id = uuidv4();
    dispatch({ type: ADD_CONTACT, payload: contact });
  };

  const deleteContact = (id) => {
    dispatch({ type: DELETE_CONTACT, payload: id });
  };

  const setCurrentContact = (contact) => {
    dispatch({ type: SET_CURRENT_CONTACT, payload: contact });
  };

  const clearCurrentContact = () => {
    dispatch({ type: CLEAR_CURRENT_CONTACT });
  };
  //DELETE_CONTACT
  //SET_CURRENT_CONTACT
  //CLEAR_CURRENT_CONTACT
  //FILTER_CONTACTS
  //CLEAR_FILTER

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        current: state.current,
        addContact,
        deleteContact,
        setCurrentContact,
        clearCurrentContact,
      }}
    >
      {children}
    </ContactContext.Provider>
  );
};

export default ContactState;
