import React from 'react';

const NotFound = (): JSX.Element => {
  return (
    <>
      <h2 className="font-mono text-5xl mb-6"><span className="text-red-600">404</span> Page Not Found</h2>
      <p>Sorry, that page does not exist.</p>
    </>
  )
}

export default NotFound;
