/* eslint-disable jsx-a11y/anchor-is-valid */
import parser from 'html-react-parser';
import React from 'react';
import { AiOutlineLike } from 'react-icons/ai';
import { BiCommentDetail } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';

function PostItem({ post }) {
  return (
    <div className="bg-[#E6E5F3] w-full rounded-md shadow-md h-auto py-3 px-3 my-5">
      <div className="w-full h-16 flex items-center justify-between ">
        <div className="flex">
          <LazyLoadImage className=" rounded-full w-10 h-10 mr-3" src="/assets/image/profildefault.png" alt="" />
          <div>
            <h3 className="text-md font-semibold ">Anonymous</h3>
          </div>
        </div>
        <p className="text-xs text-gray-500">{new Date(post.attributes.createdAt).toDateString()}</p>
      </div>
      <p>{parser(post.attributes.desc)}</p>
      <div className="flex w-full px-5 mt-8 my-3 ">
        <a className="flex flex-row justify-center items-center w-full space-x-3 ">
          <AiOutlineLike className="w-7 h-7 hover:text-blue-600 hover:scale-150 cursor-pointer" aria-placeholder="likes" />
        </a>
        <a className="flex flex-row justify-center items-center w-full space-x-3">
          <Link to={`/posts/${post.id}`}>
            <BiCommentDetail className="w-7 h-7 hover:text-yellow-600 hover:scale-150 cursor-pointer" aria-placeholder="comments" />
          </Link>
        </a>
      </div>
    </div>

  );
}
export default PostItem;
