import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 mt-auto">
      <div className="container mx-auto text-center">
        <p>&copy; 2024 Your Company Name. All rights reserved.</p>
        <div className="mt-2">
          <Link href="/about" className="mx-2 hover:text-gray-300">About Us</Link>
          <Link href="/contact" className="mx-2 hover:text-gray-300">Contact Us</Link>
          <Link href="/privacy" className="mx-2 hover:text-gray-300">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer 