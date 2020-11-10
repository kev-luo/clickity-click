import React from "react";
import './css/navbar.css'

export default function Navbar() {
  return (
    <nav className='navbar'>
      <div>Clicky Game</div>
      <div>Click an image to begin!</div>
      <div>Score: 0 | Top Score: 0</div>
    </nav>
  );
}
