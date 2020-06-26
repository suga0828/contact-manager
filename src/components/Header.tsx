import React from 'react';

interface HeaderProps {
  brand: string;
}

const Header = (props: HeaderProps) => {
  const { brand } = props;

  return (
    <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
      <a className="flex items-center flex-shrink-0 text-white mr-6" href="/">
        <svg className="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg>
        <span className="font-semibold text-xl tracking-tight">{ brand }</span>
      </a>
      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
          <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
        </button>
      </div>
      <ul className="w-full block lg:flex lg:items-center lg:w-auto">
        <li>
          <a href="/" className="text-sm px-4 py-2 leading-none text-white border-white hover:text-teal-500 mt-4 lg:mt-0">Home</a>
        </li>
      </ul>
    </nav>
  );
}

Header.defaultProps = {
  brand: 'Contact Manager'
}

export default Header;
