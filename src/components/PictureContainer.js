import React from 'react'
import Pictures from './Pictures'
import './css/picContainer.css'

export default function PictureContainer(props) {
  
  return (
    <div className='picContainer'>
      { props.children }
    </div>
  )
}
