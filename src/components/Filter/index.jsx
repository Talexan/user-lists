import "./style.css";
import React from "react";
import { UserOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import { getPosts } from "../../redux/modules/users/action";
import {
  getCachePostsAction,
  clearAllPostsAction,
} from "../../redux/modules/users/reducers/getPosts";
import store from "../../redux/modules/users/store";

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
    label: "Всі фото",
    key: "3",
    icon: <UserOutlined />,
  },
  {
    label: "Тест",
    key: "4",
    icon: <UserOutlined />,
  },
  {
    label: "Очистити",
    key: "5",
    icon: <UserOutlined />,
  },
];

const Filter = () => {
  //const dispatch = useDispatch();

  const handleMenuClick = (e) => {
    if (e.key === "1") store.dispatch(getPosts());
    if (e.key === "4") store.dispatch(getCachePostsAction());
    if (e.key === "5") store.dispatch(clearAllPostsAction());
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
