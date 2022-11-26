import "./App.css";
import About from "./components/about/About";
import Features from "./components/features/Features";
import Footer from "./components/footer/Footer";
import MapContainer from "./components/mapContainer/MapContainer";
import Navbar from "./components/navbar/Navbar";
import Pricing from "./components/pricing/Pricing";
import Testimonials from "./components/testimonials/Testimonials";

function App() {
  return (
    <div className="App">
      <Navbar />
      <About />
      <Features />
      <Pricing />
      <MapContainer />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
