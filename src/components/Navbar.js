import React from "react";

const styles={
  navbar: {
    backgroundColor: 'blue',
    display: 'flex',
    justifyContent: 'space-between',
    padding: '2rem 20px',
    color: 'white',
    position: 'fixed',
    width: '100%',
    boxShadow: '0px 4px 5px 5px rgba(0,0,0,0.48)',
    zIndex:'1',
    fontSize: '2vw'
  }
}

export default function Navbar() {
  return (
    <nav style={styles.navbar}>
      <div>Clicky Game</div>
      <div>Click an image to begin!</div>
      <div>Score: 0 | Top Score: 0</div>
    </nav>
  );
}
