import React from 'react';

import Contact from './Contact';

import { ContactInfo } from './Contacts.reducer';

interface ContactsProps {
  data: ContactInfo[];
  deleteHandler: (id: number) => void;
}

const Contacts = ({ data, deleteHandler }: ContactsProps ): JSX.Element => {
  return (
    <>
      <h2 className="font-mono text-5xl mb-6"><span className="text-teal-600">Contact</span> List</h2>
      { data.map((contact, i, arr) => (
        <Contact
          key={contact.id}
          info={contact}
          deleteHandler={() => deleteHandler(contact.id as number)}
          last={i === arr.length - 1}
        />
      )) }
    </>
  );
};

export default Contacts;
