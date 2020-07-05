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
    name: "Karen Willians",
    email: "kwill@mail.com",
    phone: '555-555-5555'
  },
  {
    id: 3,
    name: "Henry Johnson",
    email: "jdow@mail.com",
    phone: '555-555-5555'
  }
]

function Contacts() {
  const [contacts, setContacts] = useState(mockedContacts);

  const deleteContact = (id: number) => {
    const newContacts = contacts.filter(contact => contact.id !== id);

    setContacts(newContacts);
  }

  return (
    <div className="w-11/12 sm:w-3/4 max-w-screen-lg mx-auto my-10">
      { contacts.map(contact => <Contact key={contact.id} info={contact}  deleteHandler={() => deleteContact(contact.id)} />) }
    </div>
  )
}

export default Contacts;
