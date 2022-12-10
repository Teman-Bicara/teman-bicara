import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DetailPageMain from '../components/DetailPageMain';
import PostsListEmpty from '../components/PostsListEmpty';
import CONFIG from '../global/config';

function DetailPage() {
  const { id } = useParams();

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log(posts);
  }, [posts]);

  useEffect(() => {
    const fetchGetPosts = async () => {
      try {
        const res = await axios.get(`${CONFIG.BASE_URL}/api/posts/${id}?populate=*`);

        setPosts(res.data.data);
        setLoading(false);
      } catch (error) {
        alert(error);
      }
    };

    fetchGetPosts();
  }, [id]);

  if (loading) {
    return null;
  }

  return posts.length !== 0 ? (
    <DetailPageMain posts={posts} />
  ) : (<PostsListEmpty />);
}

export default DetailPage;
