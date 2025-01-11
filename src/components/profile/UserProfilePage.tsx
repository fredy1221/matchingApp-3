import React from 'react';
import { useParams } from 'react-router-dom';
import { mockUsers } from '../../data/mockUsers';

const UserProfilePage = () => {
  const { userId } = useParams<{ userId: string }>();
  const user = mockUsers.find(u => u.id === userId);

  if (!user) {
    return <div>User not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <img
          src={user.profileImage}
          alt={user.name}
          className="w-full h-64 object-cover"
        />
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-2">{user.name}</h1>
          <p className="text-gray-600 mb-4">{user.bio}</p>
          <h2 className="text-xl font-semibold mb-2">Hobbies</h2>
          <ul className="list-disc list-inside text-gray-700">
            {user.hobbies.map(hobby => (
              <li key={hobby}>{hobby}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UserProfilePage;
