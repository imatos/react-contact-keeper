import React, { useContext } from 'react';
import ContactContext from '../context/contact/ContactContext';
import ContactItem from './ContactItem';

const Contacts = () => {
  const { contacts, filtered } = useContext(ContactContext);

  if (contacts.length === 0) {
    return <h4>Please add a contact</h4>;
  }

  const contactsToShow = filtered || contacts;
  return (
    <>
      {contactsToShow.map((contact) => (
        <ContactItem key={contact.id} contact={contact} />
      ))}
    </>
  );
};

export default Contacts;
