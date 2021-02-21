import React from 'react';
import ContactForm from './ContactForm';
import Contacts from './Contacts';

const Home = () => {
  return (
    <div className="grid-2">
      <div>
        <ContactForm />
      </div>
      <div>
        <Contacts />
      </div>
    </div>
  );
};

export default Home;
