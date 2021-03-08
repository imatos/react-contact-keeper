import React, { useReducer } from 'react';
import axios from 'axios';
import ContactContext from './ContactContext';
import ContactReducer from './ContactReducer';
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  UPDATE_CONTACT,
  CONTACT_ERROR,
  SET_CURRENT_CONTACT,
  CLEAR_CURRENT_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
  GET_CONTACTS,
  CLEAR_CONTACTS,
} from '../types';

const ContactState = ({ children }) => {
  const initialState = {
    contacts: [],
    loading: true,
    filtered: null,
    current: null,
    error: null,
  };

  const [state, dispatch] = useReducer(ContactReducer, initialState);

  const addContact = async (contact) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    try {
      const res = await axios.post('/api/contacts', contact, config);
      dispatch({ type: ADD_CONTACT, payload: res.data });
    } catch (error) {
      dispatch({ type: CONTACT_ERROR, payload: error.response.msg });
    }
  };

  const getContacts = async () => {
    try {
      const res = await axios.get('/api/contacts');
      dispatch({ type: GET_CONTACTS, payload: res.data });
    } catch (error) {
      dispatch({ type: CONTACT_ERROR, payload: error.response.msg });
    }
  };

  const updateContact = (contact) => {
    dispatch({ type: UPDATE_CONTACT, payload: contact });
  };

  const deleteContact = async (id) => {
    try {
      await axios.delete(`/api/contacts/${id}`);
      dispatch({ type: DELETE_CONTACT, payload: id });
    } catch (error) {
      dispatch({ type: CONTACT_ERROR, payload: error.response.msg });
    }
  };

  const clearContacts = () => {
    dispatch({ type: CLEAR_CONTACTS });
  };

  const setCurrentContact = (contact) => {
    dispatch({ type: SET_CURRENT_CONTACT, payload: contact });
  };

  const clearCurrentContact = () => {
    dispatch({ type: CLEAR_CURRENT_CONTACT });
  };

  const filterContacts = (filter) => {
    dispatch({ type: FILTER_CONTACTS, payload: filter });
  };

  const clearFilteredContacts = () => {
    dispatch({ type: CLEAR_FILTER });
  };

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        current: state.current,
        filtered: state.filtered,
        error: state.error,
        loading: state.loading,
        getContacts,
        addContact,
        updateContact,
        deleteContact,
        setCurrentContact,
        clearCurrentContact,
        filterContacts,
        clearFilteredContacts,
        clearContacts,
      }}
    >
      {children}
    </ContactContext.Provider>
  );
};

export default ContactState;
