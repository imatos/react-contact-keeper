import React from 'react';
import ContactForm from './ContactForm';
import Contacts from './Contacts';
import ContactFilter from './ContactFilter';

const Home = () => {
  return (
    <div className="grid-2">
      <div>
        <ContactForm />
      </div>
      <div>
        <ContactFilter />
        <Contacts />
      </div>
    </div>
  );
};

export default Home;
