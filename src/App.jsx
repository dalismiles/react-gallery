import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Gallery from "./components/Gallery";
import "./App.css";

function App() {
  const [isGalleryVisible, setGalleryVisibility] = useState(true);

  return (
    <div className="App">
      <Navbar action={() => setGalleryVisibility(!isGalleryVisible)} />
      <Hero />
      <Gallery visibility={isGalleryVisible} />
    </div>
  );
}

export default App;
