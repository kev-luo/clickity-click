import React from "react";
import './css/navbar.css'

export default function Navbar({ score, topScore }) {
  return (
    <nav className='navbar'>
      <div>Clicky Game</div>
      <div>Click an image to begin!</div>
      <div>Score: { score } | Top Score: { topScore }    </div>
    </nav>
  );
}
