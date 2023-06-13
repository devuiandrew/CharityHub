import { useState, useEffect } from "react";
import CommentForm from "./CommentForm";
import Comment from "./Comment";
import { collection, deleteDoc, updateDoc, onSnapshot, doc, setDoc } from "firebase/firestore";
import { db } from "../Authentication/firebase";


const Comments = ({ currentUser }) => {



  const id = currentUser.uid;
  const name = currentUser.displayName;

  const [activeComment, setActiveComment] = useState(null);

  const [comments, setComments] = useState([]);

  const getReplies = (commentId) =>
    comments
      .filter((comments) => comments.parentId === commentId)
      .sort(
        (a, b) =>
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
      );

  //* Send comment with user info to firebase db
  const addComment = async (text, parentId = null) => {
    try {
      const newComment = {
        id: Math.random().toString(36),
        body: text,
        parentId,
        userId: id,
        username: name,
        createdAt: new Date().toISOString(),
      };

      await setDoc(doc(db, "comments", newComment.id), newComment);
    } catch (error) {
      console.error("Error adding comment:", error);
    }
    setActiveComment(null);
  };
  //* update comment using custom id [commentId]
  const updateComment = async (text, commentId) => {
    try {
      const updatedCommentRef = doc(db, "comments", commentId);
      await updateDoc(updatedCommentRef, {
        body: text,
      });
      setActiveComment(null);
    } catch (error) {
      console.error("Error updating comment:", error);
    }
  };

  //* delete comment using custom firebase doc id compering to commentId
  const deleteComment = async (commentId) => {
    if (window.confirm("Are you sure you want to remove comment?")) {
      try {
        const commentRef = doc(db, "comments", commentId);
        console.log(commentRef.path);

        await deleteDoc(commentRef);
      } catch (error) {
        console.error("Error deleting comment:", error);
      }
    }
  };


  useEffect(() => {
    const fetchComments = async () => {
      const commentCollection = collection(db, "comments");
      const unsubscribe = onSnapshot(commentCollection, (snapshot) => {
        const commentList = snapshot.docs.map((doc) => doc.data());

        setComments(commentList);
      });
      return () => {
        unsubscribe();
      };
    };
    fetchComments();
  }, []);

  return (
    <section className="section-comments" id="comments">
      <div className="comments">
        <h3 className="comments-title">Comments</h3>
        <div className="comment-form-title">Write comment</div>

        <CommentForm submitLabel="Write" handleSubmit={addComment} />
        <div className="comments-container">

          {comments.filter(
            (comment) => comment.parentId === null).map((rootComment) => (
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
