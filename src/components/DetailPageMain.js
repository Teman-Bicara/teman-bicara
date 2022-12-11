import axios from 'axios';
import parser from 'html-react-parser';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CONFIG from '../global/config';
import DetailPageComment from './DetailPageComment';

function DetailPageMain({ posts }) {
  const { id } = useParams();

  const [commenterInput, setCommenter] = useState('');
  const [commentInput, setComment] = useState('');

  const [newPosts, setNewPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const onChangeCommenterHandler = (e) => {
    setCommenter(e.target.value);
  };

  const onChangeCommentHandler = (e) => {
    setComment(e.target.value);
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const token = localStorage.getItem('accessToken');
    try {
      await axios.post(`${CONFIG.BASE_URL}/api/comments`, {
        data: {
          post: id,
          commenter: commenterInput,
          comment: commentInput,
        },
      }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setCommenter('');
      setComment('');
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const fetchGetPosts = async () => {
      try {
        const res = await axios.get(`${CONFIG.BASE_URL}/api/posts/${id}?populate=*`);

        setNewPosts(res.data.data);
        setLoading(false);
      } catch (error) {
        alert(error);
      }
    };

    fetchGetPosts();
  }, [commenterInput]);

  if (loading) {
    return null;
  }

  return (
    <div className="bg-[#E6E5F3] rounded-lg shadow-lg p-10 my-10 mx-auto max-w-2xl w-[80%]">
      <div className="flex mb-10">
        <img className="rounded-full w-10 h-10" src="/assets/image/profildefault.png" alt=" " width="100%" height="auto" />
        <div className="grow ml-4">
          <div className="flex justify-between items-center">
            <h3 className="font-bold">Anonymous</h3>
            <p className="text-gray-500 xs:text-sm">{new Date(posts.attributes.createdAt).toDateString()}</p>
          </div>
          <p>{parser(posts.attributes.desc)}</p>
        </div>
      </div>

      <p className="font-semibold">
        {newPosts.attributes.comments.data.length}
        {' '}
        <span>Comments</span>
      </p>

      <hr className="h-1 bg-slate-400 rounded-full" />

      <div className="ml-10">
        <form onSubmit={onSubmitHandler} className="mt-5">
          <input
            value={commenterInput}
            onChange={onChangeCommenterHandler}
            type="text"
            className="block w-full rounded-lg p-2 mb-2"
            placeholder="Who are you ?"
            required
          />
          <input
            value={commentInput}
            onChange={onChangeCommentHandler}
            type="text"
            className="block w-full rounded-lg p-2 mb-4"
            placeholder="Write something..."
            required
          />
          <button
            className="text-white bg-[#4949C9] px-6 py-2 rounded-xl hover:scale-105 transition-all"
            type="submit"
          >
            Comment
          </button>
        </form>

        {newPosts.attributes.comments.data.map((comment) => <DetailPageComment comment={comment} key={comment.id} />)}
      </div>
    </div>
  );
}

export default DetailPageMain;
