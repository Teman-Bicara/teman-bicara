import axios from 'axios';
import React, { useEffect, useState } from 'react';
import LoadingIndicator from '../components/LoadingIndicator';
import PostsList from '../components/PostsList';
import PostsListEmpty from '../components/PostsListEmpty';

export default function HomePage() {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchGetNotes = async () => {
      try {
        const res = await axios.get('http://localhost:1337/api/posts');

        setPosts(res.data.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchGetNotes();
  }, []);

  return (
    <>
      {loading && <LoadingIndicator />}
      {posts.length !== 0
        ? <PostsList posts={posts} />
        : <PostsListEmpty />}
    </>
  );
}
