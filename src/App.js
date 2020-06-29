import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
{/*       <header className="App-header">
      </header> */}

      <section className="block " id="home-1">
        <div>
          <h2>fashion for<br/>anyone,<br/>supplied by<br/>everyone.</h2>
        </div>
      </section>      
      

      <Footer />
    </div>
  );
}

export default App;
