import React from "react";
import Comment from "./Comment";

const CommentsSection = ({ comments }) => {
  return (
    <>
    {
      comments.map(comment => {
        return <Comment comment={comment} />
      })
    }
    </>
  )
}

export default CommentsSection;
