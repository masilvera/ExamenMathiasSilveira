import React from 'react';
import Form from '../Components/Form';
import { useCharContext } from '../utils/global.context'; 

const Contact = () => {
  const { state } = useCharContext(); 
  const themeClass = state.theme === 'dark' ? 'dark' : 'light';

  return (
    <div>
      <div className={`contact-container ${themeClass}`}>
        <h2>Want to know more?</h2>
        <p>Send us your questions and we will contact you</p>
        <Form />
      </div>
    </div>
  );
};

export default Contact;
