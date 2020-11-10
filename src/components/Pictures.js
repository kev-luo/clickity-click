import React from 'react'
import './css/pictures.css'

export default function Pictures(props) {
  return (
    <div>
      <img src={props.image} className='picCard' alt={props.image}/>
    </div>
  )
}

