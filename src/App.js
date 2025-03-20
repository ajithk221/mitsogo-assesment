// import logo from './logo1.png';
import './App.css';

import Header from './Components/Header/Header';
import HeroSection from './Components/HeroSection/HeroSection';
import FeaturesSection from './Components/FeaturesSection/FeaturesSection';
import AdditionalFeatures from './Components/AdditionalFeatures/AdditionalFeatures';
import Testimonials from './Components/Testimonials/Testmonials';
import Footer from './Components/Footer/Footer';


function App() {
  return (
    <div className="App">
     <Header />
     <HeroSection />
     <FeaturesSection />
     <AdditionalFeatures />
     <Testimonials />
     <Footer />
    </div>
  );
}

export default App;
