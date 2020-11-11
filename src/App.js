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
  const [banner, setBanner] = useState('Click An Image to Begin!');

  function checkTopScore() {
    if (score >= topScore) {
      setTopScore(prevTopScore => prevTopScore + 1)
    };
  };

  function handleClick(id) {
    let pic = data[id-1]; // find clicked image
    if (pic.clicked === true) { // if already clicked then reset everything
      setBanner('Womp Womp...');
      setScore(prevScore => prevScore - prevScore);
      setData(prevData => {
        return prevData.map(img => {
          img.clicked = false;
          return img
        });
      });
    }
    else {
      setBanner('Correct!');
      setScore(prevScore => prevScore + 1);
      checkTopScore();
      setData(prevData => {
        return prevData.map(img => {
          if (img.id === id) {
            img.clicked = true;
          };
          return img
        });
      });
    };
  };

  let imagesCopy = [...data]
  let randomizedImages = picShuffle(imagesCopy).map(image => {
    return (
      <Pictures handleClick={handleClick} key={image.id} url={image.url} id={image.id} />
    )
  });

  return (
    <>
      <Navbar score={ score } topScore={ topScore } banner={ banner }/>
      <Header />
      <PictureContainer shake={ banner }>
        { randomizedImages }
      </PictureContainer>
    </>
  );
}

export default App;
