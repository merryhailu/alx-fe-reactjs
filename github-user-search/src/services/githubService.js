
import axios from 'axios';

const githubApiKey = process.env.REACT_APP_GITHUB_API_KEY;

const api = axios.create({
    baseURL: 'https://api.github.com',
    headers: {
        Authorization: `token ${githubApiKey}`
    }
});

export const fetchUserData = async (username) => {
    try {
        const response = await api.get(`/users/${username}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching user data:', error);
        throw error;
    }
};
