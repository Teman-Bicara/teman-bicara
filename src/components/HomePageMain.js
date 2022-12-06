/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/anchor-is-valid */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Posts from './Posts';

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
    <Posts posts={posts} />
  );
}
