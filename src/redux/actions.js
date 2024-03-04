// redux/actions.js
import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit'; // Import for asynchronous actions

export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const FETCH_USER_POSTS_SUCCESS = 'FETCH_USER_POSTS_SUCCESS';
export const CREATE_POST_SUCCESS = 'CREATE_POST_SUCCESS';
export const DELETE_POST_SUCCESS = 'DELETE_POST_SUCCESS';

export const fetchPostsSuccess = (posts) => ({
  type: FETCH_POSTS_SUCCESS,
  payload: posts,
});

export const fetchUserPostsSuccess = (posts) => ({
  type: FETCH_USER_POSTS_SUCCESS,
  payload: posts,
});

export const createPostSuccess = (post) => ({
  type: CREATE_POST_SUCCESS,
  payload: post,
});

export const deletePostSuccess = (postId) => ({
  type: DELETE_POST_SUCCESS,
  payload: postId,
});
export const updatePost = (postData, postId) => ({
  type: UPDATE_POST,
  payload: { postData, postId },
});

const UPDATE_POST = 'UPDATE_POST';

export const deletePosts = createAsyncThunk(
  'posts/deletePost',
  async (postId, { rejectWithValue, getState }) => {
    try {
      const response = await fetch(`/api/posts/${postId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          // Add authorization headers if needed
        },
      });

      if (!response.ok) {
        throw new Error('Failed to delete post');
      }

      // Remove post from local state (optional, assuming successful API call)
      const posts = getState().posts.allPosts;
      return { postId, posts: posts.filter((post) => post.id !== postId) };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchPosts = () => {
  return (dispatch) => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        dispatch(fetchPostsSuccess(response.data));
      })
      .catch((error) => {
        console.error('Error fetching posts: ', error);
      });
  };
};

export const fetchUserPosts = (postID) => {
  return (dispatch) => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${postID}`)
      .then((response) => {
        dispatch(fetchUserPostsSuccess(response.data));
      })
      .catch((error) => {
        console.error('Error fetching user posts: ', error);
      });
  };
};


export const createPost = (postData) => {
  return (dispatch) => {
    axios.post('https://jsonplaceholder.typicode.com/posts', postData)
      .then((response) => {
        dispatch(createPostSuccess(response.data));
      })
      .catch((error) => {
        console.error('Error creating post: ', error);
      });
  };
};
export const updatePosts = (postData,postId) => {
  return (dispatch) => {
    axios.post(`https://jsonplaceholder.typicode.com/posts/${postId}`, postData)
      .then((response) => {
        dispatch(createPostSuccess(response.data));
      })
      .catch((error) => {
        console.error('Error creating post: ', error);
      });
  };
};

export const deletePost = (postId) => {
  return (dispatch) => {
    axios.delete(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then(() => {
        dispatch(deletePostSuccess(postId));
      })
      .catch((error) => {
        console.error('Error deleting post: ', error);
      });
  };
};
