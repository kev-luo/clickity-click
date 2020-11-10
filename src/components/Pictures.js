import React from 'react'
import './css/pictures.css'

export default function Pictures(props) {

  const picArray = [
    'alakazam.png',
    'bulbasaur.png',
    'charmandar.png',
    'dragonite.png',
    'hitmonchan.png',
    'kangaskhan.png',
    'lugia.png',
    'moltres.png',
    'nidoking.png',
    'snorlax.png',
    'squirtle.png',
    'steelix.png',
  ]

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

  let displayPics = picArray.map(pic => {
    return (
      <div>
        <img src={`${process.env.PUBLIC_URL}/images/${pic}`} className='picCard'/>
      </div>
    )
  })

  return (
    <>
      { picShuffle(displayPics) }
    </>
  )
}

