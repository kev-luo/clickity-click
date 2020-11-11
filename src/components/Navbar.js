import React from "react";
import './css/navbar.css'

export default function Navbar({ score, topScore, banner }) {
  return (
    <nav className='navbar'>
      <div>Clicky Game</div>
      <div>{ banner }</div>
      <div>Score: { score } | Top Score: { topScore }    </div>
    </nav>
  );
}
