"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/users", label: "Users" },
  { href: "/add-user", label: "Add User" }, // New Add User Page
  { href: "/login", label: "Login" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
<nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          Logo
        </Link>
        <ul className="flex space-x-6">
          <li>
            <Link href="/users" className="hover:text-gray-300">
              Users
            </Link>
          </li>
          <li>
            <Link href="/add-user" className="hover:text-gray-300">
              Add-User
            </Link>
          </li>
          
        </ul>
      </div>
    </nav>
  );
}
