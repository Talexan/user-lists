import React from "react";
import { useSelector } from "react-redux";
import { Collapse } from "antd";
import Header from "../Header";
import Filter from "../Filter";

import "./style.css";

const Comments = () => {
  let items = useSelector((state) => state.postReducer);
  items = items.map((item) => {
    return {
      key: item.id,
      label: (
        <span>
          <b>{item.email + ":  "}</b>
          <i>{item.name}</i>
        </span>
      ),
      children: item.body,
    };
  });
  return (
    <div>
      <Header title={"Коментарі до статті"} />
      <Filter />
      <Collapse items={items} />
    </div>
  );
};
export default Comments;
