import React from "react";
import "./article-bar.css";

import { Avatar } from "@mui/material";

function ArticleBar({ avatar, username, date, timePosted = "07:45" }) {
  return (
    <header className="bar" id="article-header-bar">
      <Avatar
        id="logged-in-user-avatar"
        className="avatar"
        alt=""
        src={avatar}
      />

      <p
        aria-label={username}
        className="username"
        id="post-username"
        tabIndex="0"
      >
        {username}
      </p>

      {/** set aria label to be how long agp was post created */}
      <p
        aria-label={`time posted ${date} ${timePosted}`}
        id="post-date"
        tabIndex="0"
      >
        {date} {timePosted}
      </p>
    </header>
  );
}

export default ArticleBar;
