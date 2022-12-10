import React from 'react';
import { Link } from 'react-router-dom';

function PostItem({ post }) {
  return (
    <Link to={`/posts/${post.id}`}>

      <div className="flex w-[80%] mx-auto my-10 bg-[#E6E5F3] rounded-lg shadow-lg p-4">
        <img className="rounded-full w-10 h-10" src="assets/image/profildefault.png" alt="profilepicture" width="100%" height="auto" />

        <div className="grow ml-4">
          <div className="flex justify-between">
            <h3 className="font-bold">Anonymous</h3>
            <p className="text-gray-500">{new Date(post.attributes.createdAt).toDateString()}</p>
          </div>
          <p>{post.attributes.desc}</p>
        </div>

      </div>

    </Link>
  );
}
export default PostItem;
