/* eslint-disable react/prop-types */
import React from 'react';
import PostItem from './PostItem';

export default function Posts({ posts }) {
  return (
    <div className="my-10 mx-auto max-w-2xl grid gap-8 w-[80%]">
      {posts.map((post) => (
        <PostItem post={post} key={post.id} />
      ))}
    </div>
  );
}
