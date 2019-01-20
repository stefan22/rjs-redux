import React from 'react';

const Header = (props) => {
  return (
    <div className='header'>
      <h1 className='text-center border-bottom'>{props.pageTitle}</h1>
      <p className='text-center'>{props.pageSubtitle}</p>
    </div>
  );
};


export default Header;
