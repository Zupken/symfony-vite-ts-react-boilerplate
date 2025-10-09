import reactLogo from '../assets/react.svg';
/** this works due to mapping in vite.config.js - I specified what @public is there. */
import logo from '@public/images/symfony.png';

function App() {
  return (
    <div className="assets-wrapper">
      <div className="asset-container">
        <span>TS asset loaded in TS:</span>
        <br />
        <img src={reactLogo} alt="React Logo" className="asset-image" />
        <br />
        <span>src = {reactLogo}</span>
      </div>
      <div className="asset-container">
        <span>Twig asset loaded in TS (no asset mapper):</span>
        <br />
        <img src={logo} alt="Symfony Logo" className="asset-image" />
        <br />
        <span>src = {logo}</span>
        <span> File has different hashed filename than twig asset loaded by Twig.</span>
        <span> This is because in TS we import the file directly in TS, so Vite handles it hashes it - it hashes all used files.</span>
      </div>
      <div className="asset-container">
        <span>Twig asset loaded in TS (asset mapper):</span>
        <span> I'm unsure if it's possible to load a Twig asset in TS when using the asset mapper.</span>
        <span> The easiest way would be to import the asset directly in the TS file.</span>
        <span> Then vite will handle the asset and hash it correctly.</span>
      </div>
    </div>
  );
}

export default App;