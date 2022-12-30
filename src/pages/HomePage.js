import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Paginator from '../components/Paginator';
import PostsList from '../components/PostsList';
import CONFIG from '../global/config';

export default function HomePage() {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchGetNotes = async () => {
      try {
        const res = await axios.get(`${CONFIG.BASE_URL}/api/posts?pagination[page]=1&pagination[pageSize]=100`);

        setPosts(res.data.data.reverse());
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchGetNotes();
  }, []);

  if (loading) {
    return null;
  }

  return (
    <>
      <PostsList posts={posts} />
      <div className="flex justify-center items-center">
        <Paginator />
      </div>
    </>
  );
}
