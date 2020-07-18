import React, { useState } from 'react';

import { ContactInfo } from './Contacts.reducer';

interface AddContactProps {
  addHandler: (contact: ContactInfo) => void;
}

const AddContact = (props: AddContactProps): JSX.Element => {
  const [state, setState] = useState({ name: '', email: '', phone: '' });
  const { name, email, phone } = state;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => setState({ ...state, [e.target.name]: e.target.value });

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const contact: ContactInfo = state as ContactInfo;
    props.addHandler(contact);
    setState({ name: '', email: '', phone: '' });
  }

  return (
    <form onSubmit={onSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            name="name"
            type="text"
            placeholder="Enter name..."
            value={name}
            onChange={onChange}
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email address
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            name="email"
            type="email"
            placeholder="Enter email..."
            value={email}
            onChange={onChange}
          />
          {/* <p className="text-red-500 text-xs italic">Please choose a password.</p> */}
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="phone"
          >
            Phone number
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="phone"
            type="phone"
            name="phone"
            placeholder="Enter phone..."
            value={phone}
            onChange={onChange}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Add contact
          </button>
        </div>
      </form>
  );
}

export default AddContact;
