import React, { useEffect, useState } from 'react';
import { useHistory, RouteComponentProps, withRouter, Link } from 'react-router-dom';

import TextInputGroup from '../layout/TextInputGroup';

import { useFirestore } from 'react-redux-firebase'
import { ContactInfo } from '../../store/reducers/contactReducer';
import { CONTACTS_COLLECTION } from '../../firebase/constant';

interface ManageContactState extends ContactInfo {
  errors?: any
}

const emptyState: ManageContactState = {
  name: '',
  email: '',
  phone: '',
  errors: { name: '', email: '', phone: '' }
}

type EditContactProps = RouteComponentProps<{ id: string }>;

const ManageContact = ({ match: { params } }: EditContactProps): JSX.Element => {
  const history = useHistory();
  const firestore = useFirestore();

  const [state, setState] = useState(emptyState);
  const { name, email, phone, errors } = state;

  const { id } = params;

  useEffect(() => {
    (async () => {
      if (id) {
        const res = (await firestore.collection(CONTACTS_COLLECTION).doc(id).get()).data() as ContactInfo;
        setState(res);
      }
    })()
  }, [firestore, id]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!state.name) {
      setState({
        ...state,
        errors: { ...emptyState.errors, name: '*Name is required.'}
      });
      return;
    }

    if (!state.email) {
      setState({
        ...state,
        errors: { ...emptyState.errors, email: '*Email is required.'}
      });
      return;
    }

    if (!state.phone) {
      setState({
        ...state,
        errors: { ...emptyState.errors, phone: '*Phone is required.'}
      });
      return;
    }

    (async () => {
      try {
        delete state.errors;

        const contact = { ...state };

        if (id) {
          await firestore.collection(CONTACTS_COLLECTION).doc(id).update(contact);
        } else {
          await firestore.collection(CONTACTS_COLLECTION).add(contact);
        }

        history.push('/');
      } catch (error) {
        console.error(error);
      }
    })();
  };

  return (
    <>
      <h2 className="font-mono text-5xl mb-6 flex justify-between items-center">
       { `${(id ? 'Edit' : 'Add')} Contact` }
        <Link
          to="/"
          className="text-sm bg-gray-500 hover:bg-gray-700 text-white p-2 rounded focus:outline-none focus:shadow-outline"
          >
            Back
        </Link>
      </h2>
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
          error={errors?.name}
        />
        <TextInputGroup
          label="Email"
          name="email"
          value={email}
          type="email"
          placeholder="Enter email..."
          onChange={onChange}
          error={errors?.email}
        />
        <TextInputGroup
          label="Phone"
          name="phone"
          value={phone}
          placeholder="Enter phone..."
          onChange={onChange}
          error={errors?.phone}
        />
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            { `${(id ? 'Edit' : 'Add')} contact`}
          </button>
        </div>
      </form>
    </>
  );
};

export default withRouter(ManageContact);
