import React, { useReducer } from 'react';

import Contact from './Contact';

import { mockedContacts, reducer, ContactActions } from './Contacts.reducer';

const Contacts = (): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, { contacts: mockedContacts });
  const { contacts } = state;

  return (
    <div className="w-11/12 sm:w-3/4 max-w-screen-lg mx-auto my-10">
      { contacts.map((contact, i, arr) => (
        <Contact
          key={contact.id}
          info={contact}
          deleteHandler={() => dispatch({ type: ContactActions.delete, payload: contact.id })}
          last={i === arr.length - 1}
        />
      )) }
    </div>
  );
};

export default Contacts;
