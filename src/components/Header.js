import React from 'react'
import './css/header.css';

export default function Header() {
  return (

    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <h1 className="display-4">Test Your Poke-Memory!</h1>
        <p className="lead">Click on an image to earn points, but don't click on any more than once!</p>
      </div>
    </div>
  )
}
