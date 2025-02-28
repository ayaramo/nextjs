'use client'

export default function Error({ error, reset }) {
  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <h2 className="text-2xl font-bold mb-4">Something went wrong!</h2>
      <p className="text-gray-600 mb-8">{error.message}</p>
      <button
        onClick={() => reset()}
        className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600 transition-colors"
      >
        Try again
      </button>
    </div>
  )
} 