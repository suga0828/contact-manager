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
}

const Contact = (props: ContactProps) => {
  const { name, email, phone, last } = props.info;

  const [open, setOpen] = useState(false);

  return (
    <article className={`rounded overflow-hidden shadow-lg w-full bg-gray-400 px-6 py-4 ${last ? '' : 'mb-4'}`}>
      <h1 className="font-bold text-xl mb-2">{ name } <FontAwesomeIcon onClick={() => setOpen(!open)} icon={faSortDown} /></h1>
      <p className="text-gray-700 text-base">Email: { email }</p>
      <p className="text-gray-700 text-base">Phone: { phone }</p>
      {open}
    </article>
  )
}

export default Contact;
