// src/components/Navbar.js
"use client";
import Link from "next/link";
import { useAuth } from "../hooks/useAuth";

export default function Navbar() {
  const { user } = useAuth();
  return (
    <nav className="bg-gray-900 text-white shadow-sm">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link
          href="/"
          className="text-2xl font-serif tracking-wide transition-colors duration-300 hover:text-blue-400"
        >
          Salon
        </Link>
        <div className="space-x-6">
          <Link
            href="/"
            className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
          >
            Behandlinger
          </Link>
          {user ? (
            <Link
              href="/dashboard"
              className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
            >
              Dashboard
            </Link>
          ) : (
            <Link
              href="/login"
              className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
