import React, { useState } from 'react'

import picData from './components/picData'

import Navbar from './components/Navbar'
import Header from './components/Header'
import PictureContainer from './components/PictureContainer';
import Pictures from './components/Pictures'

function App() {
  const [data, setData] = useState(picData);
  const [score, setScore] = useState(0);
  const [topScore, setTopScore] = useState(0);

  return (
    <>
      <Navbar score={ score } topScore={ topScore }/>
      <Header />
      <PictureContainer>
        <Pictures  images={ data } />
      </PictureContainer>
    </>
  );
}

export default App;
