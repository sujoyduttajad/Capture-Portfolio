import React from "react";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import GlobalStyles from "./components/GlobalStyles";
import Nav from "./components/Nav";
// Import pages down here
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import MovieDetail from "./pages/MovieDetail";
import OurWork from "./pages/OurWork";

function App() {
  return (
    <div>
      <GlobalStyles />
      <Nav />
      <Switch>
        <Route path="/" exact>
          <AboutUs />
        </Route>
        <Route path="/work">
          <OurWork /> 
        </Route>
        <Route path="/contact">
          <ContactUs />
        </Route>
        <Route path="/work/:id">
          <MovieDetail/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
