import { useState } from "react";
import { Avatar } from "@mui/material";
import { Edit, Delete } from "@mui/icons-material";

import "./comment.css";
import ActionIcons from "./ActionIcons";

function Comment({
  avatar,
  username,
  date,
  timePosted = "08:35",
  commentText,
  numberOfComments,
  currentCommentPosition,
}) {
  const [showMore, setShowMore] = useState(true);

  return (
    <>
      <article aria-label="comment" id="comment-wrapp">
        <div className="bar" id="comment-info-bar">
          <Avatar className="avatar" id="comment-avatar" src={avatar} alt="" />

          <p className="username" id="comment-username">
            {username}
          </p>

          <p id="comment-date">
            {date} {timePosted}
          </p>

          <ActionIcons
            icons={[
              { icon: <Edit />, label: "edit" },
              { icon: <Delete />, label: "delete" },
            ]}
          />

          {/* <button className="icon-button" title="edit">
            <img className="icon" aria-hidden="true" src={edit} />
            <span className="sr-only">edit</span>
          </button> 

          <button className="icon-button" id="delete-icon">
            <img className="icon" aria-hidden="true" alt="" src={deleteIcon} />
            <span className="sr-only">delete</span>
          </button>*/}
        </div>

        {/* when showMore is toggled to true element will have a class that sets its overflow to elipsis */}
        <p className={`comment-text`} id={showMore && "long-comment"}>
          {commentText}
        </p>

        <button
          aria-hidden="true"
          className="link-button small-text"
          onClick={() => {
            setShowMore(!showMore);
          }}
        >
          {showMore ? "Show more" : "Show less"}
        </button>
      </article>

      {/**Dont display line on last comment */}
      {currentCommentPosition + 1 !== numberOfComments && (
        <hr className="divider" id="comment-divider" />
      )}
    </>
  );
}

export default Comment;
