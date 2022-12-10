import axios from 'axios';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import CONFIG from '../global/config';
import DetailPageComment from './DetailPageComment';

function DetailPageMain({ posts }) {
  const { id } = useParams();

  const [commenterInput, setCommenter] = useState('');
  const [commentInput, setComment] = useState('');

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

      window.location.reload(true);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="bg-[#E6E5F3] w-full rounded-md shadow-md h-auto py-3 px-3 my-5 xs:w-[334px] xs:h-[150px] xs:mx-auto xs:">
      <div className="w-full h-16 flex items-center justify-between ">
        <div className="flex">
          <img className=" rounded-full w-10 h-10 mr-3" src="../assets/image/profildefault.jpg" alt="profilepicture" />
          <div>
            <h3 className="text-md font-semibold ">
              Anonymous
            </h3>
          </div>
        </div>
        <p className="text-xs text-gray-500">
          {new Date(posts.attributes.createdAt).toDateString()}
        </p>
      </div>
      {' '}
      <p>{posts.attributes.desc}</p>

      <form onSubmit={onSubmitHandler}>
        <input
          value={commenterInput}
          onChange={onChangeCommenterHandler}
          type="text"
          className="block"
          placeholder="Who are you ?"
          required
        />
        <input
          value={commentInput}
          onChange={onChangeCommentHandler}
          type="text"
          className="block"
          placeholder="Write something..."
          required
        />
        <button
          className=""
          type="submit"
        >
          Post Comment
        </button>
      </form>

      {posts.attributes.comments.data.map((comment) => <DetailPageComment comment={comment} key={comment.id} />)}
    </div>
  );
}

export default DetailPageMain;
