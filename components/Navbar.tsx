"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { name: "Essays", href: "/essays" },
  { name: "Poems", href: "/poems" },
  { name: "Stories", href: "/stories" },
];

const Navbar: React.FC = () => {
  const pathname = usePathname();

  return (
    <nav className="bg-white dark:bg-gray-900 py-4 px-6">
      <ul className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
        {navItems.map(({ name, href }) => {
          const isActive = pathname === href;
          return (
            <li key={href}>
              <Link href={href}>
                <button
                  className={`px-4 py-2 rounded font-medium transition 
                    ${isActive 
                      ? "bg-cyan-500 text-white shadow-md" 
                      : "bg-gray-700 text-gray-200 hover:bg-cyan-600 hover:text-white"}`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {name}
                </button>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
