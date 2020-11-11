import React, { useState } from 'react'

import picData from './components/picData'
import picShuffle from './components/utils/picShuffle'

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
      return setData(prevData => {
        return prevData.map(img => {
          img.clicked = false;
          return img
        })
      })
    } else {
      return setData(prevData => {
        return prevData.map(img => {
          if (img.id === id) {
            img.clicked = true;
          };
          return img
        })
      })
    }
  }
  console.log(data);

  let imagesCopy = [...data]
  let randomizedImages = picShuffle(imagesCopy).map(image => {
    return (
      <Pictures handleClick={handleClick} key={image.id} url={image.url} id={image.id} />
    )
  });

  return (
    <>
      <Navbar score={ score } topScore={ topScore }/>
      <Header />
      <PictureContainer>
        { randomizedImages }
      </PictureContainer>
    </>
  );
}

export default App;
