// components/PostForm.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createPost } from '../redux/actions';

const PostForm = ({ editPost }) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState(editPost ? editPost.title : '');
  const [body, setBody] = useState(editPost ? editPost.body : '');

  const handleSubmit = (e) => {
    e.preventDefault();
    const postData = {
      title,
      body,
    };
    if (editPost) {
      // Handle editing post
    } else {
      dispatch(createPost(postData));
    }
    setTitle('');
    setBody('');
  };

  return (
    <div>
      <h3>{editPost ? 'Edit Post' : 'Create Post'}</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
        <textarea placeholder="Body" value={body} onChange={(e) => setBody(e.target.value)} />
        <button type="submit">{editPost ? 'Update' : 'Create'}</button>
      </form>
    </div>
  );
};

export default PostForm;
