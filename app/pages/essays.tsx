import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const Essays = () => (
  <div>
    <Header />
    <Navbar />
    <main className="max-w-3xl mx-auto my-10 px-4">
      <h2 className="text-3xl font-bold mb-5">Essays</h2>
      <p>Explore thought-provoking essays curated just for you.</p>
    </main>
    <Footer />
  </div>
);

export default Essays;
