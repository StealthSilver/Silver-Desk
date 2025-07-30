import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const Poems = () => (
  <div className="flex flex-col min-h-screen bg-white dark:bg-gray-950">
    <Header />
    <Navbar />
    <main className="max-w-3xl mx-auto my-10 px-4 flex-1">
      <h2 className="text-3xl font-bold mb-5 text-gray-900 dark:text-gray-100">Poems</h2>
      <p className="text-gray-700 dark:text-gray-300">Read poetic creations that stir the soul.</p>
    </main>
    <Footer />
  </div>
);

export default Poems;
