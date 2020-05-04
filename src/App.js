import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Routes from '../src/routes/index';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HeaderBanner from '../src/components/HeaderBanner';

function App() {
  return (
    <div className="Page">
      <Header />
      {/* <HeaderBanner /> */}
      <Routes />
      <Footer />
      </div>
  );
}

export default App;
