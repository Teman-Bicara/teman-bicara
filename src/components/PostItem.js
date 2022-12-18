import parser from 'html-react-parser';
import React from 'react';
import { Link } from 'react-router-dom';

function PostItem({ post }) {
  return (
    <Link to={`/posts/${post.id}`}>

      <div className="flex bg-[#E6E5F3] rounded-lg shadow-lg p-4">
        <img className="rounded-full w-10 h-10" src="/assets/image/profildefault.png" alt=" " width="100%" height="auto" />
        <div className="grow ml-4">
          <div className="flex justify-between">
            <h3 className="font-bold">Anonymous</h3>
            <p className="text-gray-500">{new Date(post.attributes.createdAt).toLocaleDateString()}</p>
          </div>
          <p>{parser(post.attributes.desc)}</p>
        </div>
      </div>

    </Link>

  );
}
export default PostItem;
