import { useState } from 'react';
import searchUsers from '../services/githubService';

const Search = ({ onSearch }) => {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [noResults, setNoResults] = useState(false);


  const handleSubmit = (e) => {
    e.preventDefault();
    if (username) {
      onSearch(username);
    }
  };

  const fetchUserData = async () => {
    setIsLoading(true);
    const results = await searchUsers(username, location, minRepos);
    setUsers(results);
    setIsLoading(false);
    setNoResults(results.length === 0);
  };

  const handleSearch = () => {
    fetchUserData();
  };

  return (
    <form onSubmit={handleSubmit}>
    <div className="p-4 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4">
       <div>
        <label className="block text-sm font-medium text-gray-700">Username</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Location</label>
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Minimum Repositories</label>
        <input
          type="number"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      <button onClick={handleSearch} type='submit'>Search</button>
      {isLoading && <p>Loading...</p>}
      {noResults && !isLoading && <p>Looks like we cant find the user</p>}
      <div>
        {users.map((user) => (
          <div key={user.id}>
           
            <img src={user.avatar_url} alt={user.login} />
            <h2>{user.login}</h2>
            <p>Location: {user.location || 'N/A'}</p>
            <p>Repositories: {user.public_repos}</p>
            <a href={user.html_url} target="_blank" rel="noopener noreferrer">View Profile</a>
          </div>
        ))}
      </div>
    </div>
    </form>
  );
};

export default Search;
