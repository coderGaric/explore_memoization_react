import { useState, useEffect, lazy, Suspense } from "react";

import Comment from "./Comment";

const CommentLazy = lazy(() => import("./Comment"));

export default function Comments() {
  const [comments, setComments] = useState([]);

  const fetchComment = async () => {
    try {
      const result = await fetch(
        "https://jsonplaceholder.typicode.com/comments"
      );
      const data = await result.json();
      setComments(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!comments.length) {
      fetchComment();
    }

    return () => {
      fetchComment();
    };
    // eslint-disable-next-line
  }, []);

  console.log("render comments");

  return (
    <div className="comments-section">
      <header>
        <h1>Comments</h1>
      </header>
      <main>
        {comments.map((comment, index) => (
          <Suspense
            key={index}
            fallback={<div style={{ fontSize: "20px" }}>loading...</div>}
          >
            <CommentLazy comment={comment} />
          </Suspense>
        ))}
      </main>
    </div>
  );
}
