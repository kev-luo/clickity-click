import React, { useState, useEffect } from "react";
import './css/navbar.css'

export default function Navbar({ score, topScore, banner }) {

  let [colorFeedback, setColorFeedback] = useState('');
  
  useEffect(() => {
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
  }, [score, banner])

  return (
    <nav className='navigation'>
      <a href="/" className='navEndL'>Clicky Game</a>
      <div onAnimationEnd={() => setColorFeedback('')} className={`${colorFeedback}`}>{ banner }</div>
      <div className='navEndR'>Score: { score } | Top Score: { topScore }    </div>
    </nav>
  );
}
