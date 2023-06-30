import React from 'react';

const Footer = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '5%',
        background: ' #3B3C36',
        color: 'white',
        textAlign: 'center',
        padding: '4px',
        position: 'fixed',
        bottom: 0,
      }}
    >
     <p style={{fontSize: '22px'}}> Gmail Clone build with <span role="img" aria-label="Red Heart">❤️</span> by Pooja Soni</p>
    </div>
  );
}

export default Footer;
