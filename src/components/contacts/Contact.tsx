import React, { useState, MouseEvent } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortDown } from '@fortawesome/free-solid-svg-icons';
import { ContactInfo } from './Contacts.reducer';

import { Link } from 'react-router-dom';

import { deleteUser } from '../../services/Contacts.service';

interface ContactProps {
  info: ContactInfo;
  deleteHandler: () => void;
  last: boolean;
}

const Contact = ({ info, last, deleteHandler }: ContactProps): JSX.Element => {
  const { id, name, email, phone } = info;

  const [showInfo, setShowInfo] = useState(false);

  const toggleInfo = () => setShowInfo(!showInfo);

  const onClick = async (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();

    try {
      await deleteUser(info.id as number);
      deleteHandler();
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <article onKeyPress={toggleInfo} onClick={toggleInfo} className={`w-full px-6 py-4 rounded shadow-lg cursor-pointer bg-gray-400 ${last ? '' : 'mb-4'}`} tabIndex={0}>
      <h1 className="font-bold text-xl flex items-center justify-between">
        { name }
        <FontAwesomeIcon flip={showInfo ? 'vertical' : 'horizontal'} icon={faSortDown} />
      </h1>
      <div className={`${showInfo ? '' : 'hidden'} flex items-center justify-between`}>
        <p className="mt-2 text-gray-700 text-base">
          { `Email: ${email}` }
          <br />
          { `Phone: ${phone}` }
        </p>
        <button onClick={onClick} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">Delete</button>
        <Link to={`contact/edit/${id}`} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Edit</Link>
      </div>
    </article>
  );
};

export default Contact;
