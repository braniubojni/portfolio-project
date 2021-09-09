import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Particles from "react-particles-js";
import "./styles/particles.css";
function App() {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });
  return (
    <>
      {width > 760 ? (
        <Particles
          params={{
            particles: {
              number: 30,
              density: {
                enable: true,
                value_area: 900,
              },
              shape: {
                type: "triangle",
              },
              stroke: {
                width: 6,
                color: "blue",
              },
            },
          }}
        />
      ) : null}
      <Navbar />
      <Header />
      <AboutMe appWidth={width} />
    </>
  );
}

export default App;
