// components/PublicPostList.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../redux/actions';
import PostList from './PostList';

const PublicPostList = () => {
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <div>
      <h2>Public Posts</h2>
      <PostList posts={posts} />
    </div>
  );
};

export default PublicPostList;
