import React, { useState, useEffect } from "react";
import fetchData from "../../Utils/fetchData";

import Post from "../../Components/Post/Post";

const Home = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      const { posts } = await fetchData(
        "https://express-blog-api.herokuapp.com/api/blog/"
      );
      posts && setPosts(posts);
    };
    fetch();
  }, []);

  return (
    <div className="Home site-layout-content">
      {posts.map((e) => (
        <Post post={e} key={e._id} />
      ))}
    </div>
  );
};

export default Home;
