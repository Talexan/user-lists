import React from "react";
import Header from "../Header";
import Filter from "../Filter";
import List from "../List";

const Posts = () => {
  return (
    <div>
      <Header title={"Список статтей користувачів"} />
      <Filter />
      <List test={true} />
      <List test={false} />
    </div>
  );
};

export default Posts;
