import React, { useState } from 'react'

import picData from './components/picData'

import Navbar from './components/Navbar'
import Header from './components/Header'
import PictureContainer from './components/PictureContainer';
import Pictures from './components/Pictures'

function App() {
  const [data, setData] = useState([...picData]);
  const [score, setScore] = useState(0);
  const [topScore, setTopScore] = useState(0);

  function handleClick(id) {
    let pic = data[id-1];
    if (pic.clicked === true) {
      return setData(picData);
    } else {
      let updateData = data.map(img => {
        if (img.id === id) {
          img.clicked = true
        }
        return img
      })
      
      return setData(updateData)
    }
  }

  return (
    <>
      <Navbar score={ score } topScore={ topScore }/>
      <Header />
      <PictureContainer images={ data } />
    </>
  );
}

export default App;
