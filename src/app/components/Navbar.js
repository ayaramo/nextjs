import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          Logo
        </Link>
        <ul className="flex space-x-6">
          <li>
            <Link href="/" className="hover:text-gray-300">
              Home
            </Link>
          </li>
          <li>
            <Link href="/users" className="hover:text-gray-300">
              Users
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-gray-300">
              About Us
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-gray-300">
              Contact Us
            </Link>
          </li>
          <li>
            <Link href="/login" className="hover:text-gray-300">
              Login
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar 