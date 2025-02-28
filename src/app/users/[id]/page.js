async function getUser(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
    next: { revalidate: 3600 }
  });
  
  if (!res.ok) {
    throw new Error('Failed to fetch user');
  }
  
  return res.json();
}

export async function generateMetadata({ params }) {
  const user = await getUser(params.id);
  return {
    title: `${user.name} | User Profile`,
    description: `Profile page for ${user.name}`,
  }
}

export default async function UserPage({ params }) {
  const user = await getUser(params.id);
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-bold mb-6">{user.name}</h1>
        
        <div className="space-y-4">
          <div>
            <h2 className="text-xl font-semibold mb-2">Contact Information</h2>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
            <p>Website: {user.website}</p>
          </div>
          
          <div>
            <h2 className="text-xl font-semibold mb-2">Address</h2>
            <p>{user.address.street}</p>
            <p>{user.address.suite}</p>
            <p>{user.address.city}, {user.address.zipcode}</p>
          </div>
          
          <div>
            <h2 className="text-xl font-semibold mb-2">Company</h2>
            <p>{user.company.name}</p>
            <p>{user.company.catchPhrase}</p>
            <p>{user.company.bs}</p>
          </div>
        </div>
      </div>
    </div>
  )
} 