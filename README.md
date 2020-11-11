
# clickity-click
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
![GitHub top language](https://img.shields.io/github/languages/top/kev-luo/clickity-click)

## Description
[Deployed Link](https://kev-luo.github.io/clickity-click/)

This is a simple single-page memory application built using `create-react-app`. The goal of the game is to click on each image only once, with the images re-shuffling after very click. The score resets to 0 if you click on an image more than once. The app preserves score, top score, answer feedback, and which image has been clicked between component re-renders through useState. I used useEffect to set the answer Feedback color by passing in the banner and score props as a second argument to useEffect. This allowed me to dynamically add a class to the answer feedback text depending on the answer feedback (eg 'correct', 'wrong'). The clean up function removes the class after every re-render allowing the color animation to occur if the user answered correctly on consecutive clicks.

Some issues I ran into when making this were determining how to structure the component heirarchy. I couldn't work out how to use useContext to share values between components on different levels so I ended up keeping all components as children of the App component, whose state kept track of the game flow. 

## Table of Contents 
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Tests](#tests)
- [Questions](#questions)

## Installation
    npm install

## Usage
Have fun!

![demo-gif](public/Poke-Memory.gif)

## License
Licensed under the [MIT](https://opensource.org/licenses/MIT) License.

## Tests
    npm run test

## Questions
* [kvn.luo@gmail.com](kvn.luo@gmail.com)
