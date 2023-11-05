import React from "react";
import Posts from "../Posts";
import Form from "../Form";
import Fotos from "../Fotos";
import Comments from "../Comments";

// Список динамических компонент
const component = {
  Posts: <Posts />,
  Form: <Form />,
  Fotos: <Fotos />,
  Comments: <Comments />,
};

const DynamicContent = ({ nameDynamicComponent }) => {
  console.log(nameDynamicComponent);
  return <div>{component[nameDynamicComponent]}</div>;
};

export default DynamicContent;
