import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortDown } from '@fortawesome/free-solid-svg-icons';

interface ContactInfo {
  name: string;
  email: string;
  phone: string;
  last?: boolean;
}

interface ContactProps {
  info: ContactInfo
  deleteHandler: Function;
}

const Contact = (props: ContactProps): JSX.Element => {
  const { info } = props;
  const { name, email, phone, last } = info;
  const { deleteHandler } = props;

  const [showInfo, setShowInfo] = useState(false);

  const toggleInfo = () => {
    setShowInfo(!showInfo);
  };

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
        <button onClick={() => deleteHandler()} className="bg-transparent hover:bg-red-500 text-red-700 font-semibold py-2 px-4 border border-red-500 hover:border-transparent rounded" type="button">Delete</button>
      </div>
    </article>
  );
};

export default Contact;
