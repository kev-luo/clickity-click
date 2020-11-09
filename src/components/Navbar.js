import React from "react";

const styles={
  navbar: {
    backgroundColor: 'blue',
    display: 'flex',
    justifyContent: 'space-between',
    padding: '1.5rem 20px',
    color: 'white',
    position: 'fixed',
    width: '100%',
    boxShadow: '0px 4px 5px 5px rgba(0,0,0,0.48)',
    zIndex:'1'
  }
}

export default function Navbar() {
  return (
    <nav style={styles.navbar}>
      <div>Hello</div>
      <div>Hello</div>
      <div>Hello</div>
    </nav>
  );
}
