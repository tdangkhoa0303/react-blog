import React from "react";
import { Row, Col, Typography } from "antd";
import { Link } from "react-router-dom";

import "./Post.css";

const { Title } = Typography;

const Post = (props) => {
  const { post } = props;
  return (
    <article className="post-card">
      <Row gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 }, 32]}>
        <Col xs={24} md={8}>
          <img
            src={post.featuredImage}
            alt="post featured"
            className="post-image"
          />
        </Col>
        <Col xs={24} md={16}>
          <Title level={2}>{post.title}</Title>
          <div dangerouslySetInnerHTML={{ __html: post.excerpt }}></div>
          <div className="post-date"></div>
          <Link className="action" to={`/blog/${post.slug}`}>
            Read more
          </Link>
        </Col>
      </Row>
    </article>
  );
};

export default Post;
