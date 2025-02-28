import React from 'react'
import { GET } from '../api/user/route';

async function User() {
    const res = await GET();
    const users = await res.json();
    return (
        <div>
            {users.map(user => (
                <div>
                    <div key={user.id}>{user.name}</div>
                    <div>{user.age}</div>
                </div>
            ))}

        </div>

    )
}

export default User