import React, { useState } from 'react'

import Navbar from './components/Navbar'
import Header from './components/Header'
import PictureContainer from './components/PictureContainer';
import Pictures from './components/Pictures'

const picArray = [
  {clicked: false, id: 1, url: '/images/alakazam.png'},
  {clicked: false, id: 2, url: '/images/bulbasaur.png'},
  {clicked: false, id: 3, url: '/images/charmandar.png'},
  {clicked: false, id: 4, url: '/images/dragonite.png'},
  {clicked: false, id: 5, url: '/images/hitmonchan.png'},
  {clicked: false, id: 6, url: '/images/kangaskhan.png'},
  {clicked: false, id: 7, url: '/images/lugia.png'},
  {clicked: false, id: 8, url: '/images/moltres.png'},
  {clicked: false, id: 9, url: '/images/nidoking.png'},
  {clicked: false, id: 10, url: '/images/snorlax.png'},
  {clicked: false, id: 11, url: '/images/squirtle.png'},
  {clicked: false, id: 12, url: '/images/steelix.png'},
]

function App() {
  const [data, setData] = useState(picArray);
  const [score, setScore] = useState(0);
  const [topScore, setTopScore] = useState(0);

  function handleClick() {
    setData([
      ...data,
      {
        id: 1
      }
    ])
  }

  return (
    <>
      <Navbar score={ score } topScore={ topScore }/>
      <Header />
      <PictureContainer images={ data }/>
    </>
  );
}

export default App;
