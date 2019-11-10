import React from 'react';

const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <ul className='list-group mb-4'>
      {posts.map(post => (
        <li key={post} className='list-group-item'>
          <img src={post} alt={post} className='img-responsive' />
        </li>
      ))}
    </ul>
  );
};
export default Posts;
