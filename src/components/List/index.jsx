import "./style.css";
import React from "react";
import { Card, Col, Row, Button } from "antd";
import { useSelector } from "react-redux";
import store from "../../redux/modules/users/store";
import {
  getPostsCommentsAction,
  getFotosAction,
  hidePostAction,
} from "../../redux/modules/users/reducers/postReducer";
import {
  setCommentComponentAction,
  setFotosComponentAction,
} from "../../redux/modules/users/reducers/dynamicComponent";
import { prepare } from "../../helpers";
import { clearPostAction } from "../../redux/modules/users/reducers/getPosts";

/* {
  id: 1,
  title: '...',
  body: '...',
  userId: 1
} */

const List = ({ test }) => {
  let state = useSelector((state) => {
    console.log(state);
    if (test) return state.getCachePosts;
    return state.postReducer;
  });

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
                    <Button
                      type="link"
                      danger
                      onClick={(e) => {
                        if (test) store.dispatch(clearPostAction(card?.id));
                        else store.dispatch(hidePostAction(card?.id));
                      }}
                    >
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
                          store.dispatch(setCommentComponentAction());
                          store.dispatch(() =>
                            getPostsCommentsAction(card?.id)
                          );
                        }}
                      >
                        Коменти
                      </Button>
                      <Button
                        type="link"
                        onClick={(e) => {
                          store.dispatch(setFotosComponentAction());
                          store.dispatch(() => getFotosAction(card?.userId));
                        }}
                      >
                        Альбом автора
                      </Button>
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
