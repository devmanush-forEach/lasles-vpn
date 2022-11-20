import "./App.css";
import About from "./components/about/About";
import Features from "./components/features/Features";
import Navbar from "./components/navbar/Navbar";
import Pricing from "./components/pricing/Pricing";

function App() {
  return (
    <div className="App">
      <Navbar />
      <About />
      <Features />
      <Pricing />
    </div>
  );
}

export default App;
