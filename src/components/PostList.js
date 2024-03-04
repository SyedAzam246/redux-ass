// components/PostList.js
import React from 'react';

const PostList = ({ posts, showActions }) => {
  console.log(posts)
  return (
    <div>
      {posts.map((post) => (
        <div className='card-wrapper' key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
          {showActions && (
            <div>
              <button>Edit</button>
              <button>Delete</button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default PostList;
