import React, { useContext, useRef, useEffect } from 'react';
import ContactContext from '../context/contact/ContactContext';

const ContactFilter = () => {
  const { filterContacts, clearFilteredContacts, filtered } = useContext(
    ContactContext
  );
  const text = useRef('');

  useEffect(() => {
    if (filtered === null) {
      text.current.value = '';
    }
  });

  const onFilterChangeHandler = (e) => {
    if (text.current.value !== '') {
      filterContacts(e.target.value);
    } else {
      clearFilteredContacts();
    }
  };

  return (
    <form>
      <input
        ref={text}
        type="text"
        placeholder="Filter contacts..."
        onChange={onFilterChangeHandler}
      />
    </form>
  );
};

export default ContactFilter;
