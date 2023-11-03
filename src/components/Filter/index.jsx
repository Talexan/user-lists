import "./style.css";
import React from "react";
import { UserOutlined } from "@ant-design/icons";
import { Dropdown, message, Space } from "antd";
const handleButtonClick = (e) => {
  message.info("Click on left button.");
  console.log("click left button", e);
};
const handleMenuClick = (e) => {
  message.info("Click on menu item.");
  console.log("click", e);
};
const items = [
  {
    label: "по 10 на сторінці",
    key: "1",
    icon: <UserOutlined />,
  },
  {
    label: "по 20 на сторінці",
    key: "2",
    icon: <UserOutlined />,
  },
  {
    label: "по 50 на сторінці",
    key: "3",
    icon: <UserOutlined />,
  },
];
const menuProps = {
  items,
  onClick: handleMenuClick,
};
const Filter = () => (
  <div className="user-list__filter">
    <div className="user-list__paging">
      <Space wrap>
        <Dropdown.Button menu={menuProps} onClick={handleButtonClick}>
          Фільтр
        </Dropdown.Button>
      </Space>
    </div>
  </div>
);
export default Filter;
