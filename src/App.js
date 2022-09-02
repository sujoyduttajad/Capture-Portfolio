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
import Subscriptions from "./pages/Subscriptions";

function App() {
  const location = useLocation();

  return (
    <div>
      <GlobalStyles />
      <Nav />
      <AnimatePresence exitBeforeEnter>
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
          <Route path="/contact" exact>
            <ContactUs />
          </Route>
          <Route path="/subspack" exact>
            <Subscriptions />
          </Route>
          <Route path="/work/:id" exact>
            <MovieDetail />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
