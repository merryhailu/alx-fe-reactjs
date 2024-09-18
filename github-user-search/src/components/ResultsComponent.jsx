
import React from 'react';

const ResultsComponent = ({ users }) => {
  return (
    <div className="mt-4">
      {users.map((user) => (
        <div key={user.id} className="p-4 mb-4 bg-white rounded-xl shadow-md">
          <h2 className="text-xl font-bold">{user.login}</h2>
          <p>Location: {user.location || 'N/A'}</p>
          <p>Repositories: {user.public_repos}</p>
          <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-900">
            View Profile
          </a>
        </div>
      ))}
    </div>
  );
};

export default ResultsComponent;
