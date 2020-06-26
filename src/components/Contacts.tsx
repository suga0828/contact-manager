import React, { useState } from 'react';

import Contact from './Contact';

const mockedContacts = [
  {
    id: 1,
    name: "John Doe",
    email: "jdow@mail.com",
    phone: '555-555-5555'
  },
  {
    id: 2,
    name: "John Doe",
    email: "jdow@mail.com",
    phone: '555-555-5555'
  },
  {
    id: 3,
    name: "John Doe",
    email: "jdow@mail.com",
    phone: '555-555-5555'
  },
  {
    id: 4,
    name: "John Doe",
    email: "jdow@mail.com",
    phone: '555-555-5555'
  },
  {
    id: 5,
    name: "John Doe",
    email: "jdow@mail.com",
    phone: '555-555-5555'
  },
]

function Contacts() {
  const [contacts] = useState(mockedContacts);

  return (
    <div style={{width: '100%'}}>
      { contacts.map(contact => <Contact key={contact.id} info={contact} />) }
    </div>
  )
}

export default Contacts;
