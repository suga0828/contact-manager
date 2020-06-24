import React from 'react';

interface ContactProps {
  name: string;
  email: string;
  phone: string;
}

const Contact = (props: ContactProps) => {
  const { name, email, phone } = props;

  return (
    <div>
      <h4>{ name }</h4>
      <ul>
        <li>Email: { email }</li>
        <li>Phone: { phone }</li>
      </ul>
    </div>
  )
}

export default Contact;
