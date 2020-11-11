import React from 'react'
import Pictures from './Pictures'
import './css/picContainer.css'

export default function PictureContainer({ images }) {

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

  function handleClick(e) {
    console.log(e);
  }

  let imagesCopy = [...images]
  let randomizedImages = picShuffle(imagesCopy).map(image => {
    return (
      <Pictures handleClick={handleClick} key={image.id} url={image.url} id={image.id} name={image.url.split('/')[2]}/>
    )
  });

  return (
    <div className='picContainer'>
      { randomizedImages }
    </div>
  )
}
