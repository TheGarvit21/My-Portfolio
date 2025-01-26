import React from 'react';
import { CONTACT } from '../constants';

const Contact = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h1 className="my-20 text-center text-4xl">Contact</h1>
      <div className="text-center text-neutral-400">
        <p className="mb-2">{CONTACT.address}</p>
        <p className="mb-2">{CONTACT.phoneNo}</p>
        <p>{CONTACT.email}</p>
      </div>
    </div>
  );
};

export default Contact;
