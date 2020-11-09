import 'semantic-ui-css/semantic.min.css'

import Navbar from './components/Navbar'
import Header from './components/Header'
import PictureContainer from './components/PictureContainer';
import Pictures from './components/Pictures'

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <PictureContainer>
        <Pictures />
      </PictureContainer>
    </>
  );
}

export default App;
