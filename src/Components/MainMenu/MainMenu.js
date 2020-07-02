import React from "react";
import { Menu } from "antd";
import { Link, useLocation } from "react-router-dom";

const MainMenu = (props) => {
  const { menu } = props;
  const location = useLocation();
  return (
    <Menu theme="dark" mode="horizontal" selectedKeys={[location.pathname]}>
      {menu.map((e, i) => (
        <Menu.Item key={e.slug}>
          <Link to={e.slug}>{e.name}</Link>
        </Menu.Item>
      ))}
    </Menu>
  );
};

export default MainMenu;
