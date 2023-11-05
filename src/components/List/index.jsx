import "./style.css";
import React from "react";
import { Card, Col, Row, Button } from "antd";
import { useSelector } from "react-redux";
import store from "../../redux/modules/users/store";
import { getPostsComments } from "../../redux/modules/users/reducers/postReducer";
//import { setCommentComponentAction } from "../../redux/modules/users/reducers/dynamicComponent";
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
const List = ({ test }) => {
  let state = useSelector((state) => {
    console.log(state);
    if (test) return state.getCachePosts;
    return state.postReducer;
  });

  //const dispatch = useDispatch();

  //  let state = store.getState().getCachePosts;
  let preList = prepare(state, 3);

  return preList.map((row) => {
    return (
      <Row gutter={16}>
        {row.map((card) => {
          return (
            <Col span={8}>
              <Card
                title={card?.title || card?.name}
                bordered={false}
                key={card?.id}
              >
                <div className="container1">
                  <div className="card__post-id">
                    postID: {card?.postId || card?.id}
                  </div>
                  <div>
                    <Button type="link" danger>
                      Приховати
                    </Button>
                  </div>
                </div>
                <div className="card__body">{card?.body}</div>
                <div className="card__author">
                  Author: {card?.userId || card?.email}
                </div>
                <div className="card__references">
                  {card?.postId ? (
                    <div></div>
                  ) : (
                    <div className="container2">
                      <Button
                        type="link"
                        onClick={(e) => {
                          //store.dispatch(setCommentComponentAction());
                          store.dispatch(() => getPostsComments(card?.id));
                        }}
                      >
                        Коменти
                      </Button>
                      <Button type="link">Альбом автора</Button>
                    </div>
                  )}
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
