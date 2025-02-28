import Link from 'next/link'

const UserCard = ({ user }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <h2 className="text-xl font-bold mb-2">{user.name}</h2>
      <p className="text-gray-600 mb-2">{user.email}</p>
      <p className="text-gray-600 mb-4">{user.company.name}</p>
      <div className="space-y-1 text-sm text-gray-500">
        <p>📍 {user.address.city}</p>
        <p>🏢 {user.company.catchPhrase}</p>
        <p>🌐 {user.website}</p>
      </div>
      <Link 
        href={`/users/${user.id}`}
        className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
      >
        View Details
      </Link>
    </div>
  )
}

export default UserCard 