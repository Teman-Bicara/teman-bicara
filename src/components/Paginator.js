import React from 'react';

export default function Paginator() {
  return (
    <div className="btn-group grid grid-cols-3">
      <button className="btn btn-outline">Previous page</button>
      <button className="btn">1</button>
      <button className="btn btn-outline">Next</button>
    </div>
  );
}
