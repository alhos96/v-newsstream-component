import { useState, useEffect } from "react";
import { Container } from "@mui/material";
import axios from "axios";

import NewsPost from "./components/NewsPost";

function App() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        let response = await axios.get("/posts");
        setPosts(response.data.posts);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setError(error);
        setLoading(false);
      }
    }
    fetchData();

    return () => {};
  }, []);

  if (loading) {
    return <h4>loading</h4>;
  }

  if (error) {
    return <div>something wrong</div>;
  }

  return (
    <div className="news-stream" role="feed">
      {posts &&
        posts.map((post, i) => {
          return (
            <NewsPost
              key={i}
              barData={{
                avatar: post.avatar,
                username: post.creator,
                date: post.date,
              }}
              postData={{
                headline: post.post_headline,
                postText: post.post_text,
                postPicture: post.post_image,
                sharedWith: post.shared_with,
              }}
              commentData={post.comments}
            />
          );
        })}
    </div>
  );
}

export default App;
