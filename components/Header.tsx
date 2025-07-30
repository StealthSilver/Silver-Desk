import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

const Header: React.FC = () => (
  <header className="dark:bg-gray-900 py-4 px-6 flex flex-col md:flex-row md:items-center md:justify-between shadow-lg">
    {/* Silver's Desk title */}
    <Link
      href="/"
      className="text-black text-3xl font-bold tracking-wide"
      aria-label="Home"
    >
      Silver&apos;s Desk
    </Link>

    {/* Navbar + ThemeToggle container */}
    <div className="flex flex-col md:flex-row md:items-center md:space-x-6 mt-4 md:mt-0 w-full md:w-auto">

      {/* Navbar buttons */}
      <nav className="flex justify-center space-x-4 md:space-x-6">
        <Link href="/essays">
          <button className="text-white hover:text-cyan-400 font-medium px-3 py-1 rounded">
            Essays
          </button>
        </Link>
        <Link href="/poems">
          <button className="text-white hover:text-cyan-400 font-medium px-3 py-1 rounded">
            Poems
          </button>
        </Link>
        <Link href="/stories">
          <button className="text-white hover:text-cyan-400 font-medium px-3 py-1 rounded">
            Stories
          </button>
        </Link>
      </nav>

      {/* Theme toggle shown only on mobile inside header */}
      <div className="md:hidden mt-3">
        <ThemeToggle />
      </div>
    </div>
  </header>
);

export default Header;
