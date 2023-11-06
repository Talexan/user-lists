import "./style.css";
import React from "react";
import store from "../../redux/modules/users/store";
import { UserOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import { getAllPostsAction } from "../../redux/modules/users/reducers/postReducer";
import {
  getCachePostsAction,
  clearAllPostsAction,
} from "../../redux/modules/users/reducers/getPosts";
import {
  setPostComponentAction,
  setFormComponentAction,
} from "../../redux/modules/users/reducers/dynamicComponent";

const items = [
  {
    label: "Всі статті",
    key: "1",
    icon: <UserOutlined />,
  },
  {
    label: "Створити статтю",
    key: "2",
    icon: <UserOutlined />,
  },
  {
    label: "Тест",
    key: "3",
    icon: <UserOutlined />,
  },
  {
    label: "Очистити",
    key: "4",
    icon: <UserOutlined />,
  },
];

const Filter = () => {
  const handleMenuClick = (e) => {
    if (e.key === "1") {
      store.dispatch(setPostComponentAction());
      store.dispatch(getAllPostsAction);
    }
    if (e.key === "3") {
      store.dispatch(setPostComponentAction());
      store.dispatch(getCachePostsAction());
    }
    if (e.key === "4") store.dispatch(clearAllPostsAction());
    if (e.key === "2") {
      store.dispatch(setFormComponentAction());
      //store.dispatch(createPostAction);
    }
  };

  const menuProps = {
    items,
    onClick: handleMenuClick,
  };

  return (
    <div className="user-list__filter">
      <div className="user-list__paging">
        <Space wrap>
          <Dropdown.Button menu={menuProps}>Фільтр</Dropdown.Button>
        </Space>
      </div>
    </div>
  );
};
export default Filter;
