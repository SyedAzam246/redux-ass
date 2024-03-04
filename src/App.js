import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PublicPostList from './components/PublicPostList';
import UserPosts from './components/UserPosts';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
            <Route path="/" element={<PublicPostList />} /> 
          <Route path="/user" element={UserPosts} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;