import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Profile from './components/Profile';
import BlogPost from './components/BlogPost';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/profile/*" element={<Profile />} />
        <Route path="/blog/:id" element={<BlogPost />} />
        <Route path="/profile/*" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
      </Routes>
    </Router>
  );
}

export default App;