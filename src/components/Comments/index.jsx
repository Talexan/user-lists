import React from "react";
import { Collapse } from "antd";
import Header from "../Header";
import Filter from "../Filter";
//import { useSelector } from "react-redux";

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
const items = [
  {
    key: "1",
    label: "This is panel header 1",
    children: <p>{text}</p>,
  },
  {
    key: "2",
    label: "This is panel header 2",
    children: <p>{text}</p>,
  },
  {
    key: "3",
    label: "This is panel header 3",
    children: <p>{text}</p>,
  },
];
const Comments = () => {
  const onChange = (key) => {
    console.log(key);
  };
  //const items = useSelector((state) => state.postReducer);
  /* items.map((item) => {
    return {
      key: item.id,
      label: item.email + "   " + item.name,
      children: item.body,
    };
  }); */
  return (
    <div>
      <Header title={"Коментарі до статті"} />
      <Filter />
      <Collapse items={items} defaultActiveKey={["1"]} onChange={onChange} />
    </div>
  );
};
export default Comments;
