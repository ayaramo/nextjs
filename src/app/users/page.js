import UserCard from '../components/UserCard'

async function getUsers() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users', {
    next: { revalidate: 3600 } // Revalidate every hour
  });
  
  if (!res.ok) {
    throw new Error('Failed to fetch users');
  }
  
  return res.json();
}

export const metadata = {
  title: 'Users List | Next.js Application',
  description: 'Browse our users directory',
}

export default async function UsersPage() {
  const users = await getUsers();
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Users Directory</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {users.map(user => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  )
} 