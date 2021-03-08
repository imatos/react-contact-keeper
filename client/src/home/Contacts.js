import React, { useContext, useEffect } from 'react';
import ContactContext from '../context/contact/ContactContext';
import ContactItem from './ContactItem';

const Contacts = () => {
  const { contacts, filtered, getContacts, loading } = useContext(
    ContactContext
  );

  useEffect(() => {
    getContacts();
  }, []);

  if (loading) {
    return <h4>Loading Contacts...</h4>;
  }

  if (contacts?.length === 0) {
    return <h4>Please add a contact</h4>;
  }

  const contactsToShow = filtered || contacts;
  return (
    <>
      {contactsToShow.map((contact) => (
        <ContactItem key={contact._id} contact={contact} />
      ))}
    </>
  );
};

export default Contacts;
