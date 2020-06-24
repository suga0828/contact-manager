import React from 'react';

interface HeaderProps {
  brand: string;
}

const Header = (props: HeaderProps) => {
  const { brand } = props;

  return (
    <div>
      <h1>{ brand }</h1>
    </div>
  )
}

Header.defaultProps = {
  brand: 'Contact Manager'
}

export default Header;
