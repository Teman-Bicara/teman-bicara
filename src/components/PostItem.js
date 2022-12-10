/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable max-len */
import React from 'react';
import { BiCommentDetail } from 'react-icons/bi';
import { Link } from 'react-router-dom';

export default function PostItem({ post }) {
  return (
    <div className="bg-[#E6E5F3] w-full rounded-md shadow-md h-auto py-3 px-3 my-5 xs:w-[334px] xs:h-[150px] xs:mx-auto xs:">
      <div className="w-full h-16 flex items-center justify-between ">
        <div className="flex">
          <img className=" rounded-full w-10 h-10 mr-3" src="assets/image/profildefault.jpg" alt="profilepicture" />
          <div>
            <h3 className="text-md font-semibold ">
              Anonymous
            </h3>
          </div>
        </div>
        <p className="text-xs text-gray-500">{new Date(post.attributes.createdAt).toDateString()}</p>
      </div>
      <Link to={`/posts/${post.id}`} className="link">
        {' '}
        <p>{post.attributes.desc}</p>
      </Link>

      <div className="grid grid-cols-3 w-full px-5  my-3">
        <a className="flex flex-row justify-center items-center w-full space-x-3">
          <BiCommentDetail className="w-7 h-7 hover:text-yellow-600 hover:scale-150 cursor-pointer" />
        </a>
      </div>
    </div>
  );
}
