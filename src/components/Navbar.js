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
            <Link href="/user" className="hover:text-gray-300">
              User
            </Link>
          </li>
          
        </ul>
      </div>
    </nav>
  )
}

export default Navbar 