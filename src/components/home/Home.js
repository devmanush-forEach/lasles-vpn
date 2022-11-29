import About from "../about/About";
import Features from "../features/Features";
import Footer from "../footer/Footer";
import MapContainer from "../mapContainer/MapContainer";
import Navbar from "../navbar/Navbar";
import Pricing from "../pricing/Pricing";
import Testimonials from "../testimonials/Testimonials";

const Home = () => {
  return (
    <>
      <Navbar />
      <About />
      <Features />
      <Pricing />
      <MapContainer />
      <Testimonials />
      <Footer />
    </>
  );
};

export default Home;
