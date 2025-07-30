import ThemeToggle from "./ThemeToggle";

const Header: React.FC = () => (
  <header className="bg-gray-900 dark:bg-gray-950 py-4 flex justify-between items-center px-4 shadow-lg">
    <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-wide text-center flex-1">
      Silver&apos;s Desk
    </h1>
    <div className="ml-4">
      <ThemeToggle />
    </div>
  </header>
);
export default Header;
