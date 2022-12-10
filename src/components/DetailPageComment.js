import React from 'react';

function DetailPageComment({ comment }) {
  return (
    <div className="">
      <h3 className="text-md font-semibold">
        {comment.attributes.commenter}
      </h3>

      <p className="text-xs text-gray-500">
        {comment.attributes.comment}
      </p>
    </div>
  );
}

export default DetailPageComment;
