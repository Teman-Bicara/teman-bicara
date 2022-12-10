import React from 'react';
import DetailPageComment from './DetailPageComment';

function DetailPageMain({ posts }) {
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

      {posts.attributes.comments.data.map((comment) => <DetailPageComment comment={comment} key={comment.id} />)}
    </div>
  );
}

export default DetailPageMain;
