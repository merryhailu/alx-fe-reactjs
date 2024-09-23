
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import UserSearch from './components/UserSearch';
import Search from './components/Search';
import { fetchUserData  } from './services/githubService';
import { useState } from 'react';

const App = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
  
    const handleSearch = async (username) => {
      setLoading(true);
      setError('');
      try {
        const userData = await fetchUserData(username);
        setUser(userData);
      } catch (err) {
        setError('Looks like we can’t find the user');
      } finally {
        setLoading(false);
      }
    };
    return (
        <Router>
            <div>
                <h1>GitHub User Search</h1>
                <Switch>
                    <Route path="/" component={UserSearch} />
                </Switch>
            </div>
            <div>
      <Search onSearch={handleSearch} />
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {user && (
        <div>
          <img src={user.avatar_url} alt={user.login} />
          <h2>{user.name}</h2>
          <a href={user.html_url} target="_blank" rel="noopener noreferrer">
            View Profile
          </a>
        </div>
      )}
    </div>
        </Router>
    );
};

export default App;

