import { useSelector } from "react-redux";
import About from "../../components/about/About";
import Features from "../../components/features/Features";
import Footer from "../../components/footer/Footer";
import MapContainer from "../../components/mapContainer/MapContainer";
import Pricing from "../../components/pricing/Pricing";
import Testimonials from "../../components/testimonials/Testimonials";

const Home = () => {
  const { user } = useSelector((state) => state.user);
  return (
    <>
      <About />
      <Features />
      {!user?.subscibedPlan && <Pricing />}
      <MapContainer />
      <Testimonials />
      <Footer />
    </>
  );
};

export default Home;
