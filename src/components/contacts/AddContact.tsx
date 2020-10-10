import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import TextInputGroup from '../layout/TextInputGroup';

import { ContactInfo } from '../../store/reducers/contactReducer';
import { connect, ConnectedProps } from 'react-redux';
import { addContact } from '../../store/actions/contactActions';

type AddContactProps = ConnectedProps<typeof connector>;

const emptyState = {
  name: '',
  email: '',
  phone: '',
  errors: { name: '', email: '', phone: '' }
};

const AddContact = ({ addContact }: AddContactProps): JSX.Element => {
  const [state, setState] = useState(emptyState);
  const { name, email, phone, errors } = state;
  const history = useHistory();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (state.name === '') {
      setState({
        ...state,
        errors: { ...emptyState.errors, name: '*Name is required.' }
      });
      return;
    }

    if (state.email === '') {
      setState({
        ...state,
        errors: { ...emptyState.errors, email: '*Email is required.' }
      });
      return;
    }

    if (state.phone === '') {
      setState({
        ...state,
        errors: { ...emptyState.errors, phone: '*Phone is required.' }
      });
      return;
    }

    try {
      (async () => {
        const contact = { ...state };
        delete contact.errors;

        addContact(contact as ContactInfo);

        setState(emptyState);
        history.push('/');
      })();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <h2 className="font-mono text-5xl mb-6">Add Contact</h2>
      <form
        onSubmit={onSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <TextInputGroup
          label="Name"
          name="name"
          value={name}
          placeholder="Enter name..."
          onChange={onChange}
          error={errors.name}
        />
        <TextInputGroup
          label="Email"
          name="email"
          value={email}
          type="email"
          placeholder="Enter email..."
          onChange={onChange}
          error={errors.email}
        />
        <TextInputGroup
          label="Phone"
          name="phone"
          value={phone}
          placeholder="Enter phone..."
          onChange={onChange}
          error={errors.phone}
        />
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Add contact
          </button>
        </div>
      </form>
    </>
  );
};

const connector = connect(null, { addContact });

export default connector(AddContact);
