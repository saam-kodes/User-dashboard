import React from 'react';

export default function UserAuthCard({ users }) {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-lg font-bold mb-2">Active Users</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id} className="text-gray-700">
            {user.name} ({user.email})
          </li>
        ))}
      </ul>
    </div>
  );
}