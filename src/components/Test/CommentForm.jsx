import React, { useContext, useState } from "react";
import { db } from "../Authentication/firebase";
import firebase from "firebase/compat/app";
import { collection, addDoc } from "firebase/firestore";
import UserContext from "../hooks/useContext";

function CommentForm() {
  const user = useContext(UserContext);
  let id, name;
  if (user) {
    id = user.uid;
    name = user.displayName;
  } else {
    console.log("user not login");
  }
  const [commentData, setCommentData] = useState({
    id: "",
    body: "",
    username: "",
    userId: "",
    parentId: "",
    createdAt: "",
  });

  const handleChange = (e) => {
    setCommentData({ ...commentData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (commentData.body !== "") {
      await addDoc(collection(db, "comments"), {
        ...commentData,
        id: Math.random().toString(36),
        parentId: null,
        userId: id,
        username: name,
        createdAt: new Date().toISOString(),
      });
      setCommentData({
        id: "",
        body: "",
        username: "",
        userId: "",
        parentId: "",
        createdAt: "",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Add input fields for each property */}
      <input
        type="text"
        name="body"
        placeholder="Comment body"
        value={commentData.body}
        onChange={handleChange}
      />
      {/* Add more input fields for other properties */}
      <button type="submit">Submit Comment</button>
    </form>
  );
}

export default CommentForm;
