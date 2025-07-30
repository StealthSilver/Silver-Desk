import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Featured from "../components/Featured";
import Footer from "../components/Footer";

const Home = () => (
  <div className="flex flex-col min-h-screen bg-white dark:bg-gray-950">
    <Header />
    <Navbar />
    <Hero />
    <Featured />
    <div className="flex-grow" /> 
    <Footer />
  </div>
);

export default Home;
