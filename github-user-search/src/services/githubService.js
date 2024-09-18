
import axios from 'axios';

const BASE_URL = 'https://api.github.com/search/users?q';

const searchUsers = async (username, location, minRepos) => {
  const query = [
    username && `user:${username}`,
    location && `location:${location}`,
    minRepos && `repos:>=${minRepos}`
  ].filter(Boolean).join(' ');

  try {
    const response = await axios.get(`${BASE_URL}=${query}`);
    return response.data.items;
  } catch (error) {
    console.error('Error fetching users:', error);
    return [];
  }
};

export default searchUsers;
