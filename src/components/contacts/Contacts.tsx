import React, { useEffect } from 'react';

import Contact from './Contact';

import { AppState } from '../../reducers';
import { getContactsAction } from '../../actions/contactActions';
import { connect, ConnectedProps } from 'react-redux';

type ContactsProps = ConnectedProps<typeof connector>;

const Contacts = ({
  contacts,
  getContactsAction
}: ContactsProps): JSX.Element => {
  useEffect(() => {
    getContactsAction();
  });

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

const connector = connect(
  (state: AppState) => ({
    contacts: state.contacts.contacts
  }),
  { getContactsAction }
);

export default connector(Contacts);
