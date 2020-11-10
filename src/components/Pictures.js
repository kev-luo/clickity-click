import React from 'react'
import './css/pictures.css'

export default function Pictures({ images }) {
  function picShuffle(picArray) {
    let arrLength = picArray.length;
    for (let i=arrLength-1; i>0; i--) {
      let j = Math.floor(Math.random() * (i+1));
      let temp = picArray[i];
      picArray[i] = picArray[j];
      picArray[j] = temp;
    }
    return picArray;
  }

  let randomizedImages = picShuffle(images).map(image => {
    return (
      <img className="picCard" key={image.id} src={image.url}/>
    )
  });

  return (
    <>
      { randomizedImages }
    </>
  )
}

