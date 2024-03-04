import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { createPost, updatePost, updatePosts } from '../redux/actions';
import { fetchUserPosts } from '../redux/actions';
import { useNavigate } from 'react-router-dom';
const PostForm = ({ editPost }) => {
  editPost = true
  const dispatch = useDispatch();
  const [title, setTitle] = useState(editPost ? editPost.title : '');
  const [body, setBody] = useState(editPost ? editPost.body : '');
  const userID = 1; // Assuming userID is available
  const { postID } = useParams();
  const navigate = useNavigate();
console.log(postID)
const { posts } = useSelector((state) => state.posts);
const fetchedPost = posts

    useEffect(() => {
      dispatch(fetchUserPosts(postID));
      setTitle(fetchedPost?.title);
      setBody(fetchedPost?.body);
  }, [dispatch, posts]);
  console.log(fetchedPost)

  const handleSubmit = (e) => {
    e.preventDefault();
    const postData = {
      title,
      body,
      userID,
    };
    if (postID) {
      dispatch(updatePosts(postData, postID));
    } 
    setTitle('');
    setBody('');
  };
  const handleUpdate = () => {
    navigate(`/user/`);
  };

  return (
    <div className='Update-container'>
      <h3>{editPost ? 'Edit Post' : 'Create Post'}</h3>
      <form onSubmit={handleSubmit} className='form-container'>
        <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
        <textarea placeholder="Body" value={body} onChange={(e) => setBody(e.target.value)} />
        <button onClick={() => handleUpdate()} type="submit">{editPost ? 'Update' : 'Create'}</button>
      </form>
    </div>
  );
};

export default PostForm;