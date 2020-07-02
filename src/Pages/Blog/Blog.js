import React, { useState, useEffect } from "react";
import fetchData from "../../Utils/fetchData";

import Post from "../../Components/Post/Post";
import { Pagination, Spin } from "antd";

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [current, setCurrent] = useState(1);
  const [limit, setLimit] = useState(5);
  const [count, setCount] = useState(0);
  const [isLoad, setLoad] = useState(false);

  useEffect(() => {
    const fetch = async () => {
      setLoad(false);
      const { posts, count } = await fetchData(
        `https://express-blog-api.herokuapp.com/api/blog/?page=${current}&limit=${limit}`
      );
      setLoad(true);
      posts && setPosts(posts);
      count && setCount(count);
    };
    fetch();
  }, [current, limit]);

  return (
    <div className="Home site-layout-content">
      {!isLoad && <Spin></Spin>}
      {posts.map((e) => (
        <Post post={e} key={e._id} />
      ))}
      <Pagination
        current={current}
        onChange={(page) => setCurrent(page)}
        total={count}
        pageSize={limit}
      />
    </div>
  );
};

export default Blog;
