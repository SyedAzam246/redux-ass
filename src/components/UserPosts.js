
// // components/UserPosts.js
// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useParams } from 'react-router-dom';
// import { fetchUserPosts, fetchPosts } from '../redux/actions';
// import PostList from './PostList';
// import PostForm from './PostForm';

// const UserPosts = () => {
//   const dispatch = useDispatch();
//   const { userId } = useParams();
//   const { posts } = useSelector((state) => state.posts);
//   const [showMyPosts, setShowMyPosts] = useState(false);

//   useEffect(() => {
//     if (showMyPosts) {
//       dispatch(fetchUserPosts(userId));
//     } else {
//       dispatch(fetchPosts());
//     }
//   }, [dispatch, userId, showMyPosts]);

//   const toggleMyPosts = () => {
//     setShowMyPosts(!showMyPosts);
//   };

//   return (
//     <div>
//       <h2>User Posts</h2>
//       <button onClick={toggleMyPosts}>{showMyPosts ? 'All Posts' : 'My Posts'}</button>
//       {showMyPosts ? (
//         <div>
//           <h3>My Posts</h3>
//           <PostList posts={posts} showActions={true} />
//         </div>
//       ) : (
//         <PostList posts={posts} />
//       )}
//       <PostForm />
//     </div>
//   );
// };

// export default UserPosts;
import React, { useEffect, useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchPosts } from '../redux/actions';
import PostList from './PostList';
import PostForm from './PostForm';

const UserPosts = () => {
  // const { userId } = useParams();
  // const { posts } = useSelector((state) => state.posts);
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(fetchPosts()); // Fetch all posts (including user 1 posts)
  // }, []); // Empty dependency array ensures fetch runs only once

  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);
  const filteredPosts = posts.filter((post) => post.userId === 1); // Filter posts with userId 1
  console.log(filteredPosts)
  return (
    <div>
      <h2>User Posts</h2>
      {/* No need for toggle button or showMyPosts state as we're always filtering for user 1 posts */}
      <PostList posts={posts} showActions={true} />
      <PostForm />
    </div>
  );
};

export default UserPosts;