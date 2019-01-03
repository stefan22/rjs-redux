import React from 'react';

const Header = (props) => {

  return (
    <div className='header'>
      <h1 className='text-center border-bottom'>{props.pageName}</h1>
      <p className='text-center'>Dolor primis vive bibendum sagittis pretium</p>
    </div>
  );
};


export default Header;
