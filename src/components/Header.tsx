import React from 'react';

interface HeaderProps {
  brand: string:
}

const Header = (props: HeaderProps) => {
  const { brand } = props;

  return (
    <div>
      <h1>{ brand }</h1>
    </div>
  )
}

export default Header;
