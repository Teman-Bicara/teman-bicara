/* eslint-disable react/prop-types */
import React from 'react';
import PostItem from './PostItem';
import PostsListEmpty from './PostsListEmpty';

const isPosts = (posts) => posts.map((post) => (
  <div className="my-10 mx-auto max-w-2xl grid gap-8 w-[80%]">

    <PostItem post={post} key={post.id} />

  </div>
));

export default function Posts({ posts }) {
  return (
    !posts ? <PostsListEmpty /> : isPosts(posts)
  );
}
