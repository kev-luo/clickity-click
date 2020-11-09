import React from 'react'

const styles = {
  background: {
    width: '100%',
    height: 'auto',
  },
  container: {
    position: 'relative',
  },
  title: {
    top: '50%',
    left: '50%',
    fontSize: 50,
  },
  subtitle: {
    top: '65%',
    left: '50%',
  },
  text: {
    position: 'absolute',
    transform: 'translate(-50%, -50%)',
    color: 'white',
    textShadow: '2px 2px 5px black'
  }
}

export default function Header() {
  return (
    <div style={styles.container}>
      <img style={styles.background} src={`${process.env.PUBLIC_URL}/background.jpg`} alt="background" />
      <h1 style={{...styles.title, ...styles.text}}>Clicky Game!</h1>
      <h2 style={{...styles.subtitle, ...styles.text}}>Click on an image to earn points, but don't click on any more than once!</h2>
    </div>
  )
}
