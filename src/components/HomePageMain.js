/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/anchor-is-valid */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Posts from './Posts';
import { getActiveNotes } from '../utils/api';

export default function HomePageMain() {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGetNotes = async () => {
      try {
        const { data } = await getActiveNotes();
        setPosts(data);
        setLoading(false);
      } catch (error) {
        alert(error);
      }
    };

    fetchGetNotes();
  }, []);
  return (
    <Posts posts={posts} />
  );
}
