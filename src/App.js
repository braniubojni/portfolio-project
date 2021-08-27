import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Particles from "react-particles-js";
import "./styles/mainStyle.css";

function App() {
  return (
    <>
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
      <Navbar />
      <Header />
    </>
  );
}

export default App;
