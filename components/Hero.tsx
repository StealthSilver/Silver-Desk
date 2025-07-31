const Hero: React.FC = () => (
  <div className="relative h-[350px] w-full">
    <img
      src="/Golden Mist Over Serene Valley.png"
      alt="Landscape"
      className="h-full w-full object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-gray-800/50 to-transparent"></div>
    <div className="absolute bottom-5 left-5 text-white">
      <h2 className="text-3xl font-semibold">Welcome to Silver&apos;s Desk</h2>
      <p className="mt-2 text-lg">Where essays, stories, and poems come alive.</p>
    </div>
  </div>
);
export default Hero;
