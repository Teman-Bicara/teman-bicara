import axios from 'axios';
import React, { useEffect, useState } from 'react';
import PostsList from '../components/PostsList';
import PostsListEmpty from '../components/PostsListEmpty';
import CONFIG from '../global/config';

export default function HomePage() {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchGetNotes = async () => {
      try {
        const res = await axios.get(`${CONFIG.BASE_URL}/api/posts`);

        setPosts(res.data.data);
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

  return posts.length !== 0
    ? <PostsList posts={posts} />
    : <PostsListEmpty />;
}
