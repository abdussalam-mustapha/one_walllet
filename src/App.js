import React from 'react';
import './App.css';
import About from './components/about/About';
import FeatureSection from './components/featureSection/FeatureSection';
import Feedbacks from './components/feedbacks/Feedbacks';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Learn from './components/learn/Learn';
import Transactions from './components/transactions/Transactions';


function App() {
  return (
    <div className="App">
      <Header />
      <FeatureSection />
      <About />
      <Learn />
      <Feedbacks />
      <Transactions />
      <Footer />
    </div>
  );
}

export default App;
