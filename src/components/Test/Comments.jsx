// src/components/Comments.js
import React, { useEffect, useState } from "react";
import { db } from "../Authentication/firebase";
import { collection, getDocs } from "firebase/firestore";

function Comments() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchComments = async () => {
      const commentCollection = collection(db, "comments");
      const commentSnapshot = await getDocs(commentCollection);
      const commentList = commentSnapshot.docs.map((doc) => doc.data());
      setComments(commentList);
    };
    fetchComments();
  }, []);

  return (
    <div>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>
            <p>{comment.body}</p>
            <p>{comment.username}</p>
            {/* Render other comment properties as needed */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Comments;
