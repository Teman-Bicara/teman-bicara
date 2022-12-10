/* eslint-disable react/prop-types */
import React from 'react';
import PostItem from './PostItem';

export default function Posts({ posts }) {
  return (
    <div className="pb-40">
      {posts.map((post) => (
        <PostItem post={post} key={post.id} />
      ))}
    </div>
  );
}
