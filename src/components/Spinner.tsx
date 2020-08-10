import React from 'react';

const Spinner = () => {
  return (
    <div
      style={{
        position: 'fixed',
        width: '100%',
        height: '100%',
        backgroundColor: 'gray'
      }}
    >
      Loading
    </div>
  );
};

export default Spinner;
