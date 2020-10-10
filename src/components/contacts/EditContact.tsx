import React, { useState, useEffect } from 'react';
import { useHistory, RouteComponentProps, withRouter } from 'react-router-dom';

import TextInputGroup from '../layout/TextInputGroup';

import { AppState } from '../../store';
import { connect, ConnectedProps } from 'react-redux';
import { getContact, updateContact } from '../../store/actions/contactActions';

type PropsFromRedux = ConnectedProps<typeof connector>;

type EditContactProps = PropsFromRedux & RouteComponentProps<{ id: string }>;

const EditContact = ({
  contact,
  getContact,
  updateContact,
  match: { params }
}: EditContactProps): JSX.Element => {
  const { id } = params;

  const [state, setState] = useState({
    name: '',
    email: '',
    phone: '',
    errors: { name: '', email: '', phone: '' }
  });
  const { name, email, phone, errors } = state;
  const history = useHistory();

  useEffect(() => {
    if (Number(id)) {
      getContact(id);
    } else {
      history.push('/');
    }
  }, [id, history]);

  useEffect(() => {
    const { name, email, phone } = contact;

    setState(state => ({
      name,
      email,
      phone,
      errors: state.errors
    }));
  }, [contact]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (state.name === '') {
      setState({
        ...state,
        errors: { name: '*Name is required.', email: '', phone: '' }
      });
      return;
    }

    if (state.email === '') {
      setState({
        ...state,
        errors: { name: '', email: '*Email is required.', phone: '' }
      });
      return;
    }

    if (state.phone === '') {
      setState({
        ...state,
        errors: { name: '', email: '', phone: '*Phone is required.' }
      });
      return;
    }

    try {
      (async () => {
        const contact = { ...state, id };
        delete contact.errors;

        updateContact(contact);

        history.push('/');
      })();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <h2 className="font-mono text-5xl mb-6">Edit Contact</h2>
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
            Edit contact
          </button>
        </div>
      </form>
    </>
  );
};

const connector = connect(
  (state: AppState) => ({
    contact: state.contacts.contact
  }),
  { getContact, updateContact }
);

export default connector(withRouter(EditContact));
