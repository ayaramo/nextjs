"use client";

import UserCard from "@/components/UserCard";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Loading from "../loading";

const UsersPage = () => {
const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const router = useRouter();

  useEffect(() => {
    fetch("/api/users")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch");
        return res.json();
      })
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  if (loading) return <Loading />;
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-6 text-center">Users</h1>
      {users.length > 0 ? (
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {users.map((user) => (
            <UserCard key={user._id} user={user} />
          ))}
        </ul>
      ) : (
        <div className="mt-8 p-8 bg-white rounded-lg shadow-lg flex flex-col items-center">
          <h2 className="text-2xl font-bold text-gray-800">No Users Yet</h2>
          <p className="text-gray-600 mt-2">Start by adding a new user.</p>
          <button
            onClick={() => router.push("/add-user")}
            className="mt-4 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
          >
            Add a New User
          </button>
        </div>
      )}
    </div>
  );
};

export default UsersPage;
