import React from 'react';
import {Outlet} from 'react-router-dom';
import {Footer} from './src/components/Footer';
import {Header} from './src/components/Header';


function App() {
  return (
    <div className="container bg-info">
      <Header />
      <Outlet />
      <Footer />
    </div>
    
  );
}

export default App;