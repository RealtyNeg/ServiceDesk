import React from 'react';

const Footer = () =>
{
  return (
    <footer className="d-block" >
      <nav className='d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary'>
        <div className="text-left" >&copy; {new Date().getFullYear()} All rights reserved.</div>
        <div className="text-right" >Premium Business Solutions</div>
      </nav>
    </footer>
  );
};

export default Footer;
