// redux/actions.js
import axios from 'axios';

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

export const fetchUserPosts = (userId) => {
  return (dispatch) => {
    axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
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
