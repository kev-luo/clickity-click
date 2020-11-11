import React from 'react'
import './css/picContainer.css'

export default function PictureContainer(props) {
  let shakeFrames = (props.shake === 'Womp Womp...');

  return (
    <div className={`${shakeFrames ? "shake " : ""}picContainer`}>
      { props.children }
    </div>
  )
}
