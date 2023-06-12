import { useState, useEffect, useContext } from "react";
import CommentForm from "./CommentForm";
import Comment from "./Comment";
import {
  getComments as getCommentsApi
} from "../../js/api";
import firebase from 'firebase/compat/app';
import "firebase/firestore";
import UserContext from "../hooks/useContext";

const createCommentApi = async (text, parentId = null, id, name) => {

  return {
    id: Math.random().toString(36),
    body: text,
    parentId,
    userId: id,
    username: name,
    createdAt: firebase.firestore.FieldValue.serverTimestamp()
  };
};

const updateCommentApi = async (text) => {
  return { text };
};

const deleteCommentApi = async () => {
  return {};
};

const Comments = ({ currentUser }) => {

  const id = currentUser.uid;
  const name = currentUser.displayName;
  console.log(id)
  const [backendComments, setBackendComments] = useState([]);
  const [activeComment, setActiveComment] = useState(null);


  const rootComments = backendComments.filter(
    (backendComment) => backendComment.parentId === null
  );

  const getReplies = (commentId) =>
    backendComments
      .filter((backendComment) => backendComment.parentId === commentId)
      .sort(
        (a, b) =>
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
      );

  //! send comment with user info
  const addComment = (text, parentId) => {
    createCommentApi(text, parentId, id, name).then((comment) => {
      setBackendComments([comment, ...backendComments]);
      setActiveComment(null);
    });
  };

  const updateComment = (text, commentId) => {
    updateCommentApi(text).then(() => {
      const updatedBackendComments = backendComments.map((backendComment) => {
        if (backendComment.id === commentId) {
          return { ...backendComment, body: text };
        }
        return backendComment;
      });
      setBackendComments(updatedBackendComments);
      setActiveComment(null);
    });
  };

  const deleteComment = (commentId) => {
    if (window.confirm("Are you sure you want to remove comment?")) {
      deleteCommentApi().then(() => {
        const updatedBackendComments = backendComments.filter(
          (backendComment) => backendComment.id !== commentId
        );
        setBackendComments(updatedBackendComments);
      });
    }
  };

  useEffect(() => {
    getCommentsApi().then((data) => {
      setBackendComments(data);
    });
  }, []);

  return (
    <section className="section-comments" id="comments">
      <div className="comments">
        <h3 className="comments-title">Comments</h3>
        <div className="comment-form-title">Write comment</div>

        <CommentForm submitLabel="Write" handleSubmit={addComment} />
        <div className="comments-container">

          {rootComments.map((rootComment) => (
            <Comment
              key={rootComment.id}
              comment={rootComment}
              replies={getReplies(rootComment.id)}
              activeComment={activeComment}
              setActiveComment={setActiveComment}
              addComment={addComment}
              deleteComment={deleteComment}
              updateComment={updateComment}
              currentUserId={currentUser.uid}
            />
          ))}

        </div>
      </div>
    </section>
  );
};

export default Comments;
