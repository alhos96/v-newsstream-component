import React from "react";
import "./article-bar.css";

import { Avatar, Typography } from "@mui/material";

function ArticleBar({ avatar, username, date, timePosted = "07:45" }) {
  return (
    <header className="bar" id="article-header-bar">
      <Avatar
        id="logged-in-user-avatar"
        className="avatar"
        alt=""
        src={avatar}
      />

      <p className="username" id="post-username">
        {username}
      </p>

      <p id="post-date">
        {date} {timePosted}
      </p>
    </header>
  );
}

export default ArticleBar;
