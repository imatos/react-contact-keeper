import React, { useState, useContext, useEffect } from 'react';
import ContactContext from '../context/contact/ContactContext';

const formInitialState = {
  name: '',
  email: '',
  phone: '',
  type: 'personal',
};

const ContactForm = () => {
  const {
    addContact,
    updateContact,
    current,
    clearCurrentContact,
  } = useContext(ContactContext);

  const [contact, setContact] = useState(formInitialState);

  useEffect(() => {
    if (current !== null) {
      setContact(current);
    } else {
      setContact(formInitialState);
    }
  }, [current]);

  const { name, email, phone, type } = contact;

  const onChangeHandler = (event) => {
    setContact({ ...contact, [event.target.name]: event.target.value });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (current) {
      updateContact(contact);
      onClearHandler();
    } else {
      addContact(contact);
      setContact(formInitialState);
    }
  };

  const onClearHandler = () => {
    clearCurrentContact();
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <h2 className="text-primary">
        {current ? 'Edit Contact' : 'Add Contact'}
      </h2>
      <input
        type="text"
        placeholder="Name"
        name="name"
        value={name}
        onChange={onChangeHandler}
      />
      <input
        type="email"
        placeholder="Email"
        name="email"
        value={email}
        onChange={onChangeHandler}
      />
      <input
        type="text"
        placeholder="Phone"
        name="phone"
        value={phone}
        onChange={onChangeHandler}
      />
      <h5>Contact Type</h5>
      <input
        type="radio"
        name="type"
        value="personal"
        onChange={onChangeHandler}
        checked={type === 'personal'}
      />
      Personal{' '}
      <input
        type="radio"
        name="type"
        value="professional"
        onChange={onChangeHandler}
        checked={type === 'professional'}
      />
      Professional
      <div>
        <input
          type="submit"
          value={current ? 'Update Contact' : 'Add Contact'}
          className="btn btn-primary btn-block"
        />
      </div>
      {current && (
        <div>
          <button className="btn btn-light btn-block" onClick={onClearHandler}>
            Clear
          </button>
        </div>
      )}
    </form>
  );
};

export default ContactForm;
