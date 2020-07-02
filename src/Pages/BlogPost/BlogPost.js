import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import "./BlogPost.css";

import fetchData from "../../Utils/fetchData";
import { Row, Col, Typography } from "antd";

const { Title, Text } = Typography;

const BlogPost = () => {
  const { slug } = useParams();

  const [post, setPost] = useState({});
  useEffect(() => {
    const fetch = async () => {
      const post = await fetchData(
        `https://express-blog-api.herokuapp.com/api/blog/${slug}`
      );
      post && setPost(post);
    };
    fetch();
  }, [post, slug]);
  return (
    <div className="Post site-layout-content">
      <Row justify="center" gutter={[8, 8]}>
        <Col span={24}>
          <Title level={2}>{post.title}</Title>
        </Col>
      </Row>
      <Row justify="center" gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 }, 32]}>
        <Col span={24}>
          <Text mark>{post.author}</Text>
        </Col>
      </Row>
      <Row justify="left" gutter={[8, 16]}>
        <Col span={24}>
          <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
        </Col>
      </Row>
    </div>
  );
};

export default BlogPost;
