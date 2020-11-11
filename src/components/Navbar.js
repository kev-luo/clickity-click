import React, { useState, useEffect } from "react";
import './css/navbar.css'

export default function Navbar({ score, topScore, banner }) {

  let [colorFeedback, setColorFeedback] = useState('');
  
  useEffect(() => {
    console.log('hello')
    if (banner === 'Womp Womp...') {
      setColorFeedback('wrong');
    } else if (banner === 'Correct!') {
      setColorFeedback('correct');
    } else {
      setColorFeedback('');
    };

    return () => {
      setColorFeedback('');
    }
  }, [score])

  return (
    <nav className='navbar'>
      <div>Clicky Game</div>
      <div onAnimationEnd={() => setColorFeedback('')} className={`${colorFeedback}`}>{ banner }</div>
      <div>Score: { score } | Top Score: { topScore }    </div>
    </nav>
  );
}
