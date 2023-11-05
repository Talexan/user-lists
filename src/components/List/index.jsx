import "./style.css";
import React from "react";
import { Card, Col, Row, Button } from "antd";
import { useSelector } from "react-redux";
//import store from "../../redux/modules/users/store";

/* {
  id: 1,
  title: '...',
  body: '...',
  userId: 1
} */

const prepare = (array, size) => {
  let subarray = []; //массив в который будет выведен результат.
  for (let i = 0; i < Math.ceil(array.length / size); i++) {
    subarray[i] = array.slice(i * size, i * size + size);
  }
  return subarray;
};
const List = () => {
  let state = useSelector((state) => {
    console.log(state.getCachePosts);
    return state.getCachePosts;
  });
  //  let state = store.getState().getCachePosts;
  let preList = prepare(state, 3);
  return preList.map((row) => {
    return (
      <Row gutter={16}>
        {row.map((card) => {
          return (
            <Col span={8}>
              <Card title={card?.title} bordered={false} key={card?.id}>
                <div>postID: {card?.id}</div>
                <div>{card?.body}</div>
                <div>Author: {card?.userId}</div>
                <div className="card__references">
                  <Button type="link">Коменти</Button>
                  <Button type="link">Альбом автора</Button>
                </div>
              </Card>
            </Col>
          );
        })}
      </Row>
    );
  });
};
export default List;
