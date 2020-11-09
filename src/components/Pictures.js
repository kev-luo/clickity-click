import React from 'react'

export default function Pictures(props) {
  const picObject = {
    '1': 'alakazam.png',
    '2': 'bulbasaur.png',
    '3': 'charmandar.png',
    '4': 'dragonite.png',
    '5': 'hitmonchan.png',
    '6': 'kangaskhan.png',
    '7': 'lugia.png',
    '8': 'moltres.png',
    '9': 'nidoking.png',
    '10': 'snorlax.png',
    '11': 'squirtle.png',
    '12': 'steelix.png',
  }

  return (
    <div>
      <img src={`${process.env.PUBLIC_URL}/${picObject[props.id]}`} />
    </div>
  )
}
