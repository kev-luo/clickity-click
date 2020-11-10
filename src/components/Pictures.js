import React from 'react'
import './css/pictures.css'

export default function Pictures(props) {
  return (
    <>
      <img onClick={() => props.handleClick(props.image)} src={props.image} className='picCard' alt={props.image.split('/')[2]}/>
    </>
  )
}

