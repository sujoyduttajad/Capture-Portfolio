import React from 'react'
import GlobalStyles from './components/GlobalStyles';
import Nav from './components/Nav';
// Import pages down here
import AboutUs from './pages/AboutUs';

function App() {
  return (
    <div>
      <GlobalStyles/>
      <Nav/>
      <AboutUs/>
    </div>
  );
}

export default App;
