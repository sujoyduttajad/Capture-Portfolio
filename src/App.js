import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import GlobalStyles from "./components/GlobalStyles";
import Nav from "./components/Nav";
// Import pages down here
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import MovieDetail from "./pages/MovieDetail";
import OurWork from "./pages/OurWork";
// Animation
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  console.log(location);

  return (
    <div>
      <GlobalStyles />
      <Nav />
      <AnimatePresence>
        <Switch 
          location={location} 
          key={location.pathname}
        >
          <Route path="/" exact>
            <AboutUs />
          </Route>
          <Route path="/work" exact>
            <OurWork />
          </Route>
          <Route path="/contact">
            <ContactUs />
          </Route>
          <Route path="/work/:id">
            <MovieDetail />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
