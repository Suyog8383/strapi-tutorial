import Link from "next/link";
import React from "react";

function NavBar() {
  return (
    <div>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link
            href="/"
            className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
          >
            <img src="/logo.svg" className="w-10 h-10" alt="logo" />
            <span className="ml-3 text-xl">MYSHOP</span>
          </Link>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link href="/" className="mr-5 hover:text-gray-900">
              Home
            </Link>
            <Link href="/about" className="mr-5 hover:text-gray-900">
              About
            </Link>
            <Link href="/products" className="mr-5 hover:text-gray-900">
              Products
            </Link>
            <Link href="/contact" className="mr-5 hover:text-gray-900">
              Contact Us
            </Link>
          </nav>
          <button className="my-2 text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-sm">
            Log in
          </button>
        </div>
      </header>
    </div>
  );
}

export default NavBar;
