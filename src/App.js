import React from "react";
import { Route } from "react-router-dom";
import GlobalStyles from "./components/GlobalStyles";
import Nav from "./components/Nav";
// Import pages down here
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import OurWork from "./pages/OurWork";

function App() {
  return (
    <div>
      <GlobalStyles />
      <Nav />
      <Route path="/">
        <AboutUs />
      </Route>
      <Route path="/work">
        <ContactUs />
      </Route>
      <Route path="/contact">
        <OurWork />
      </Route>
    </div>
  );
}

export default App;
