import React, { useState, useEffect } from 'react';
import { useHistory, RouteComponentProps, withRouter } from 'react-router-dom';

import TextInputGroup from '../layout/TextInputGroup'

import { getUser, editUser } from '../../services/Contacts.service';
import { ContactInfo } from './Contacts.reducer';

type EditContactParams = { id: string };

interface EditContactProps extends RouteComponentProps<EditContactParams> {
  editHandler: (contact: ContactInfo) => void;
}

const EditContact = (props: EditContactProps): JSX.Element => {
  const { id } = props?.match?.params;

  const [state, setState] = useState({ name: '', email: '', phone: '', errors: { name: '', email: '', phone: '' } });
  const { name, email, phone, errors } = state;
  const history = useHistory();

  useEffect(() => {
    if (Number(id)) {
      (async () => {
        const { name, email, phone } = await getUser(id);

        setState({ name, email, phone, errors: { name: '', email: '', phone: '' } })
      })();
    } else {
      history.push("/");
    }
  }, [id, history]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [e.target.name]: e.target.value });
  }

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (state.name === '') {
      setState({...state, errors: { name: '*Name is required.', email: '', phone: '' }});
      return;
    }

    if (state.email === '') {
      setState({...state, errors: {  name: '', email: '*Email is required.', phone: '' }});
      return;
    }

    if (state.phone === '') {
      setState({...state, errors: { name: '', email: '', phone: '*Phone is required.' }});
      return;
    }

    try {
      (async () => {
        const updateContact = { ...state };
        delete updateContact.errors;

        const usedUpdated = await editUser(updateContact as ContactInfo, id);

        props.editHandler(usedUpdated);

        history.push("/");
      })();
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
      <h2 className="font-mono text-5xl mb-6">Edit Contact</h2>
      <form onSubmit={onSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <TextInputGroup label="Name" name="name" value={name} placeholder="Enter name..." onChange={onChange} error={errors.name} />
        <TextInputGroup label="Email" name="email" value={email} type="email" placeholder="Enter email..." onChange={onChange} error={errors.email} />
        <TextInputGroup label="Phone" name="phone" value={phone} placeholder="Enter phone..." onChange={onChange} error={errors.phone} />
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
}

export default withRouter(EditContact);
