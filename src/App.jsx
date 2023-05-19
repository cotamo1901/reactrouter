import { useEffect, useState } from "react";
import "./App.css";

const NAVIGATION_EVENT = "pushstate";
function navigate(href) {
  window.history.pushState({}, "", href);

  const navigationEvent = new Event(NAVIGATION_EVENT);

  window.dispatchEvent(navigationEvent);
}

function HomePage() {
  return (
    <>
      <h1>Home</h1>
      <img src="https://e7.pngegg.com/pngimages/459/974/png-clipart-flag-ulke-bayraklar%C4%B1-daktent-world-history-bilim-a%C2%A7ocuk-flag-world.png" alt="" />
      <p>
        Esta es una pagina de ejemplo para crear un reactr Router desde cero
      </p>
      <button onClick={() => navigate('/about')}>ABOUT</button>
    </>
  );
}

function Contact() {
  return (
    <>
      <h1>Contact</h1>
      <img src="https://w7.pngwing.com/pngs/21/923/png-transparent-telephone-call-computer-icons-headphones-symbol-contact-blue-electronics-text-thumbnail.png" alt="" />
      <p>This page is conctact</p>
      <button onClick={() => navigate('/')}>HOME</button>
    </>
  );
}

function AboutPage() {
  return (
    <>
      <h1>About</h1>
      <p>Hola me llamo John</p>

      <button onClick={() => navigate('/contact')}>CONTACT</button>
    </>
  );
}

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener(NAVIGATION_EVENT, onLocationChange);

    return () =>
     window.removeEventListener(NAVIGATION_EVENT, onLocationChange);
    },[]

  );

  return (
    <main>
      {currentPath == "/" && <HomePage />}
      {currentPath == "/about" && <AboutPage />}
      {currentPath == "/contact" && <Contact />}
    </main>
  );
}

export default App;
