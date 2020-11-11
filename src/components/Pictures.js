import React from 'react'
import './css/pictures.css'

export default function Pictures({ url, id, name, handleClick }) {
  return (
    <>
      <img className="picCard" src={url} alt={name} onClick={() => handleClick(id)}/>
    </>
  )
}

