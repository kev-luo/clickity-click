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

export default picShuffle;