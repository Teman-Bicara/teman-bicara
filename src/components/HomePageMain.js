/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/anchor-is-valid */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { AiOutlineLike, AiOutlineShareAlt } from 'react-icons/ai';
import { BiCommentDetail } from 'react-icons/bi';
import { useLocation } from 'react-router-dom';

export default function HomePageMain() {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const getPosts = async () => {
      const res = await axios.get(`http://localhost:5000/api/posts/${search}`);
      setPosts(res.data);
    };
    getPosts();
  }, [search]);
  return (
    <>
      <div className="bg-[#E6E5F3] w-full rounded-md shadow-md h-auto py-3 px-3 my-5">
        <div className="w-full h-16 flex items-center justify-between ">
          <div className="flex">
            <img className=" rounded-full w-10 h-10 mr-3" src="assets/image/profil2.jpg" alt="" />
            <div>
              <h3 className="text-md font-semibold ">Jessica Ara</h3>
            </div>
          </div>
          <p className="text-xs text-gray-500">2 hours ago</p>
        </div>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
        <div className="w-full h-8 flex items-center px-3 my-3">
          <div className="bg-blue-500 z-10 w-5 h-5 rounded-full flex items-center justify-center ">
            <svg className="w-3 h-3 fill-current text-white" xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 24 24" fill="none" stroke="#b0b0b0" strokeWidth="2" strokeLinecap="square" strokeLinejoin="round"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" /></svg>
          </div>
          <div className="bg-red-500 w-5 h-5 rounded-full flex items-center justify-center -ml-1">
            <svg className="w-3 h-3 fill-current stroke-current text-white" xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 24 24" fill="none" stroke="#b0b0b0" strokeWidth="2" strokeLinecap="square" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>
          </div>
          <div className="w-full flex justify-between">
            <p className="ml-3 text-gray-500">8</p>
            <p className="ml-3 text-gray-500">29 comment</p>
          </div>
        </div>

        <div className="grid grid-cols-3 w-full px-5  my-3">
          <a className="flex flex-row justify-center items-center w-full space-x-3 ">
            <AiOutlineLike className="w-7 h-7 hover:text-blue-600 hover:scale-150 cursor-pointer" />
          </a>
          <a className="flex flex-row justify-center items-center w-full space-x-3">
            <BiCommentDetail className="w-7 h-7 hover:text-yellow-600 hover:scale-150 cursor-pointer" />
          </a>
          <a className="flex flex-row justify-center items-center w-full space-x-3">
            <AiOutlineShareAlt className="w-7 h-7 hover:text-red-600 hover:scale-150 cursor-pointer" />
          </a>
        </div>
      </div>
      <hr />
      <div className="bg-[#E6E5F3] w-full rounded-md shadow-md h-auto py-3 px-3 my-5">
        <div className="w-full h-16 flex items-center justify-between ">
          <div className="flex">
            <img className=" rounded-full w-10 h-10 mr-3" src="assets/image/profil3.jpg" alt="" />
            <div>
              <h3 className="text-md font-semibold ">Fera Shii</h3>
            </div>
          </div>
          <p className="text-xs text-gray-500">1 hour ago</p>
        </div>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
        <div className="w-full h-8 flex items-center px-3 my-3">
          <div className="bg-blue-500 z-10 w-5 h-5 rounded-full flex items-center justify-center ">
            <svg className="w-3 h-3 fill-current text-white" xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 24 24" fill="none" stroke="#b0b0b0" strokeWidth="2" strokeLinecap="square" strokeLinejoin="round"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" /></svg>
          </div>
          <div className="bg-red-500 w-5 h-5 rounded-full flex items-center justify-center -ml-1">
            <svg className="w-3 h-3 fill-current stroke-current text-white" xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 24 24" fill="none" stroke="#b0b0b0" strokeWidth="2" strokeLinecap="square" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>
          </div>
          <div className="w-full flex justify-between">
            <p className="ml-3 text-gray-500">8</p>
            <p className="ml-3 text-gray-500">29 comment</p>
          </div>
        </div>
        <div className="grid grid-cols-3 w-full px-5  my-3">
          <a className="flex flex-row justify-center items-center w-full space-x-3 ">
            <AiOutlineLike className="w-7 h-7 hover:text-blue-600 hover:scale-150 cursor-pointer" />
          </a>
          <a className="flex flex-row justify-center items-center w-full space-x-3">
            <BiCommentDetail className="w-7 h-7 hover:text-yellow-600 hover:scale-150 cursor-pointer" />
          </a>
          <a className="flex flex-row justify-center items-center w-full space-x-3">
            <AiOutlineShareAlt className="w-7 h-7 hover:text-red-600 hover:scale-150 cursor-pointer" />
          </a>
        </div>
      </div>
    </>
  );
}
