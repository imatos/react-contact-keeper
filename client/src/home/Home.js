import React, { useContext, useEffect } from 'react';
import ContactForm from './ContactForm';
import Contacts from './Contacts';
import ContactFilter from './ContactFilter';
import AuthContext from '../context/auth/AuthContext';

const Home = () => {
  const { loadUser } = useContext(AuthContext);

  useEffect(() => {
    loadUser();
  }, []);

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
