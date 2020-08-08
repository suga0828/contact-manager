import React, { useEffect } from 'react';

import Contact from './Contact';

import { ContactInfo, ContactActions } from '../../reducers/contactReducer';
import { AppState } from '../../reducers';

import { connect } from 'react-redux';

interface ContactsProps {
  contacts: ContactInfo[];
  getContacts: () => void;
}

const Contacts = ({ contacts, getContacts }: ContactsProps): JSX.Element => {
  useEffect(() => {
    getContacts();
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

const mapStateToProps = (state: AppState) => ({ contacts: state.contacts.contacts });
const mapDispatchToProps = (dispatch: any) => ({ getContacts: () => dispatch({ type: ContactActions.get }) });

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
