import React from 'react';
import {Outlet} from 'react-router-dom';
import Nav from './src/components/Nav';
// import Footer from './src/components/Footer';

function App() {
  return (
    <div className="container">
      <Nav />
      <Outlet />
      {/* <Foot /> */}
    </div>
    
  );
}

export default App;