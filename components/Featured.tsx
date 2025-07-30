const Featured: React.FC = () => (
  <section className="my-10 max-w-3xl mx-auto px-4">
    <h3 className="text-2xl font-bold mb-5 text-gray-800 dark:text-gray-100">Featured</h3>
    <div className="grid gap-6 sm:grid-cols-2">
      <div className="bg-gray-100 dark:bg-gray-800 p-5 rounded shadow-md">
        <h4 className="font-bold mb-2 text-gray-900 dark:text-gray-100">Latest Essay</h4>
        <p className="text-gray-700 dark:text-gray-300">Exploring the art of storytelling through personal perspectives.</p>
      </div>
      <div className="bg-gray-100 dark:bg-gray-800 p-5 rounded shadow-md">
        <h4 className="font-bold mb-2 text-gray-900 dark:text-gray-100">Featured Poem</h4>
        <p className="text-gray-700 dark:text-gray-300">A journey through emotions captured in verse and rhyme.</p>
      </div>
    </div>
  </section>
);
export default Featured;
