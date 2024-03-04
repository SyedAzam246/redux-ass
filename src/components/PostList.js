// components/PostList.js
import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { deletePost } from '../redux/actions';
import { useNavigate } from 'react-router-dom';

const PostList = ({ posts, showActions }) => {
  console.log(posts)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDelete = async (postId) => {
    try {
      await dispatch(deletePost(postId));
    } catch (error) {
    }
  };
  const handleEdit = (postId) => {
    navigate(`/edit-post/${postId}`); // Navigate to edit route with postId
  };
  return (
    <div>
      {posts.map((post) => (
        <div className='card-wrapper' key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
          {showActions && (
            <div>
              <button onClick={() => handleEdit(post.id)}>Edit</button>
              <button onClick={() => handleDelete(post.id)}>Delete</button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default PostList;
