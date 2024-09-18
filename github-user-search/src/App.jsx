
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import UserSearch from './components/UserSearch';

const App = () => {
    return (
        <Router>
            <div>
                <h1>GitHub User Search</h1>
                <Switch>
                    <Route path="/" component={UserSearch} />
                </Switch>
            </div>
        </Router>
    );
};

export default App;

