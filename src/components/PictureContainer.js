import React from 'react'
import Pictures from './Pictures'
import './css/picContainer.css'

export default function PictureContainer(props) {
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

  let randomizedImages = picShuffle(props.images);
  
  return (
    <div className='picContainer'>
      {
        randomizedImages.map(image => {
          return <Pictures key={image.id} image={image.url} />
        })
      }
    </div>
  )
}
