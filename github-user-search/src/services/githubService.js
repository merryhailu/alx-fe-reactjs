
import axios from 'axios';

const BASE_URL = 'https://api.github.com/search/users?q';

export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`${BASE_URL}/${username}`);
    return response.data;
  } catch (error) {
    throw new Error('User not found');
  }
};


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
