import Link from 'next/link';

const Navbar: React.FC = () => (
  <nav className="bg-gray-800 text-white">
    <ul className="flex justify-center space-x-8 py-5 text-lg font-medium">
      <li><Link href="/essays" className="hover:text-cyan-400">Essays</Link></li>
      <li><Link href="/poems" className="hover:text-cyan-400">Poems</Link></li>
      <li><Link href="/stories" className="hover:text-cyan-400">Stories</Link></li>
    </ul>
  </nav>
);
export default Navbar;
