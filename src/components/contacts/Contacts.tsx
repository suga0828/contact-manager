import React from 'react';

import Contact from './Contact';

import { AppState } from '../../store';

import { useSelector } from 'react-redux'
import { isLoaded, isEmpty, useFirestoreConnect } from 'react-redux-firebase'
import { ContactInfo } from '../../store/reducers/contactReducer';

const Contacts = (): JSX.Element => {
  useFirestoreConnect([{ collection: 'contacts' }])

  const contacts: ContactInfo[] = useSelector((state: AppState) =>  state.firestore.ordered.contacts)

  if (!isLoaded(contacts)) {
    return <div>Loading...</div>
  }

  if (isEmpty(contacts)) {
    return <div>Todos List Is Empty</div>
  }

  return (
    <>
      <h2 className="font-mono text-5xl mb-6">
        <span className="text-teal-600">Contact</span> List
      </h2>
      {contacts.map((contact, i, arr) => (
        <Contact key={contact.id} info={contact} last={i === arr.length - 1} />
      ))}
    </>
  );
};

export default Contacts
