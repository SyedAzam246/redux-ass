
import React, { useEffect, useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchPosts } from '../redux/actions';
import PostList from './PostList';
import PostForm from './PostForm';
import { deletePost } from '../redux/actions';
const UserPosts = () => {

  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const filteredPosts = posts.filter((post) => post.userId === 1); // Filter posts with userId 1
  console.log(filteredPosts)
  console.log(posts)
  return (
    <div>
      <h2>User Posts</h2>
      {/* No need for toggle button or showMyPosts state as we're always filtering for user 1 posts */}
      <PostList posts={filteredPosts} showActions={true} />
    </div>
  );
};

export default UserPosts;