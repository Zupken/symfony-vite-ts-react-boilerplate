import reactLogo from '../assets/react.svg'
/** this works due to mapping in vite.config.js - I specified what @public is there. */
import logo from '@public/images/symfony.png';

function App() {
  return (
    <>
      <span>
        TS asset loaded in TS: <img src={reactLogo} alt="Logo" />
      </span>
      <br />
      <span>
        Twig asset loaded in TS: <img src={logo} alt="Logo" />
      </span>
    </>
  );
}

export default App
