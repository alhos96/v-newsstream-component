import { Chip, Avatar } from "@mui/material";
import { ThumbUp, Comment, Share } from "@mui/icons-material";

import "./post.css";
import ActionIcons from "./ActionIcons";

function Post({ headline, postText, postPicture, sharedWith }) {
  return (
    <>
      <div id="news-post-content">
        {headline && (
          <h5 id="post-headline" tabIndex={0}>
            {headline && headline}
          </h5>
        )}

        {postPicture && (
          <img
            id="post-picture"
            aria-label="post image"
            src={postPicture}
            aria-hidden="true"
            alt="post"
          />
        )}

        <p id="post-content" tabIndex={0}>
          {postText}
        </p>

        <div className="bar" id="post-actions">
          <dl title="Shared with" id="shared-with-list" tabIndex="0">
            <dt>Shared with:</dt>

            {sharedWith?.length > 0 ? (
              sharedWith.map((share, i) => {
                return (
                  <dd key={i} id="shared-with-chip">
                    <Chip
                      avatar={
                        <Avatar
                          alt=""
                          src={share.avatar}
                          id="shared-with-avatar"
                        />
                      }
                      label={share.name}
                    />
                  </dd>
                );
              })
            ) : (
              <dd>
                {/* I just put this randomly here if no shared with contacts exists. Not final */}
                all
              </dd>
            )}
          </dl>

          <ActionIcons
            icons={[
              { icon: <ThumbUp />, label: "like" },
              { icon: <Comment />, label: "comment" },
              { icon: <Share />, label: "share" },
            ]}
          />
        </div>
      </div>
      <hr className="divider post-divider" />
    </>
  );
}

export default Post;
