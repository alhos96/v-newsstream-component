import { useState, useEffect } from "react";

import "./news-post.css";
import showComments from "../assets/icons/showComments.svg";
import hideComments from "../assets/icons/hideComments.svg";
import ArticleBar from "./ArticleBar";
import Comment from "./Comment";
import Post from "./Post";

const NewsPost = ({ barData, postData, commentData }) => {
  let noOfComments = commentData.length;
  const [commentsVisible, setCommentsVisible] = useState(5);

  return (
    <article className="news-post">
      <ArticleBar
        avatar={barData.avatar}
        username={barData.username}
        date={barData.date}
      />

      <Post
        headline={postData.headline}
        postText={postData.postText}
        postPicture={postData.postPicture}
        sharedWith={postData.sharedWith}
      />
      {noOfComments > commentsVisible && (
        <>
          <button
            className="link-button more-less-comments-button"
            onClick={() => setCommentsVisible(noOfComments)}
          >
            <img
              className="icon more-less-comments-button-icon"
              alt=""
              aria-hidden="true"
              src={showComments}
            />
            <span>Show all comments</span>
          </button>
          <hr className="divider comment-divider"></hr>
        </>
      )}

      {noOfComments === commentsVisible && noOfComments !== 5 && (
        <>
          <button
            className="link-button more-less-comments-button"
            onClick={() => setCommentsVisible(5)}
          >
            <img
              className="icon more-less-comments-button-icon"
              alt=""
              aria-hidden="true"
              src={hideComments}
            />
            <span>Hide comments</span>
          </button>
          <hr className="divider comment-divider"></hr>
        </>
      )}

      {noOfComments === 0 ? (
        <p>no comments</p>
      ) : (
        noOfComments > 0 &&
        commentData.map((comment, i) => {
          if (i < commentsVisible)
            return (
              <Comment
                key={i}
                numberOfComments={commentData.length}
                currentCommentPosition={i}
                avatar={comment.avatar}
                username={comment.creator}
                date={comment.date}
                commentText={comment.comment}
              />
            );
        })
      )}
    </article>
  );
};

export default NewsPost;
