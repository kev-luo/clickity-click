import React from 'react'
import './css/header.css';

export default function Header() {
  return (
    <div className="container">
      <img className='background' src={`${process.env.PUBLIC_URL}/background.jpg`} alt="background" />
      <h1 className='title text'>Clicky Game!</h1>
      <h2 className='subtitle text'>Click on an image to earn points, but don't click on any more than once!</h2>
    </div>
  )
}
