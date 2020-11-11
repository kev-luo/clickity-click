import React from 'react'
import './css/pictures.css'

export default function Pictures({ url, id, handleClick }) {
  return (
    <>
      <img 
        className="picCard" 
        src={url} 
        alt={url.split('/')[3]} 
        onClick={() => handleClick(id)}
      />
    </>
  )
}

