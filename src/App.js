import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import Particles from "react-particles-js";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Projects from "./Pages/Projects";
import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        {/* <Particles
          className="particles-canvas"
          params={{
            particles: {
              number: {
                value: 30,
                density: {
                  enable: true,
                  value_area: 900,
                },
              },
              shape: {
                type: "circle",
                stroke: {
                  width: 6,
                  color: "#6ABBFF",
                },
              },
            },
          }}
        />
        <Navbar></Navbar>
        <Header></Header> */}

        <Projects />
        <Switch>
          <Route path="/projects" component={Projects} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
