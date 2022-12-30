import React from 'react';
import parser from 'html-react-parser';

function DetailPageComment({ comment }) {
  return (
    <>
      <div className="my-4 ml-8">
        <h3 className="font-semibold">
          {comment.attributes.commenter}
        </h3>
        <p className="text-slate-600">
          {parser(comment.attributes.comment)}
        </p>
      </div>
      <hr className="h-[2px] bg-slate-400 rounded-full ml-8" />
    </>
  );
}

export default DetailPageComment;
