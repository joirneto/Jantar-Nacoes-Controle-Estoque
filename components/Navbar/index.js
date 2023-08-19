import React from "react";
import Link from "next/link";
const currentYear = new Date().getFullYear();

const NavBar = () => (
  <nav className="w-full py-4 bg-yellow-600 shadow">
    <div className="w-full container mx-auto flex flex-wrap items-center justify-between">
      <nav className="flex items-center justify-between font-bold text-sm text-white uppercase no-underline">
        <Link href= "/">
          <a className="hover:text-gray-200 hover:underline px-4">
            JANTAR DAS NAÇÕES {currentYear} IBF
            </a>
        </Link>
        </nav>
    </div>
  </nav>
)

export default NavBar;