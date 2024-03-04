import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PublicPostList from './components/PublicPostList';
import UserPosts from './components/UserPosts';
import EditPOst from './components/PostForm';
import Header from './components/Header';

function App() {

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
            <Route path="/" element={<PublicPostList />} /> 
          <Route path="/user/" element={< UserPosts />} />
          <Route path='/edit-post/:postID' element={< EditPOst  />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;