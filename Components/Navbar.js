"use client";

import { useState } from "react";
import Link from "next/link";

const menus = ["Home","About","Projects","Experience","Skills","Contact","CV"]

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full text-white fixed top-0 left-0 z-50 bg-black/70 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        <Link href="/" className="text-xl font-semibold tracking-wide">
          Krishna
        </Link>

        <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
          {["Home","About","Projects","Experience","Skills","Contact","CV"].map((item) => (
            <Link
              key={item}
              href={`/${item === "Home" ? "" : item.toLowerCase()}`}
              className="relative group"
            >
              {item}
              <span className="absolute left-0 -bottom-1 w-0 h-px bg-white transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden relative w-6 h-6 flex flex-col justify-between"
        >
          <span
            className={`block h-0.5 bg-white transition-all duration-300 ${
              open ? "rotate-45 translate-y-2.5" : ""
            }`}
          />
          <span
            className={`block h-0.5 bg-white transition-all duration-300 ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 bg-white transition-all duration-300 ${
              open ? "-rotate-45 `-translate-y-2.5` " : ""
            }`}
          />
        </button>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-black/90 backdrop-blur-lg px-6 pb-6 space-y-5 text-sm">
          {menus.map((item) => (
            <Link
              key={item}
              href={`/${item === "Home" ? "" : item.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="block transform transition duration-300 hover:translate-x-2"
            >
              {item}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}