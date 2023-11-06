import React from "react";
import { useSelector } from "react-redux";
import Header from "../Header";
import Filter from "../Filter";
import { Card, Col, Row } from "antd";
import { prepare } from "../../helpers";

/* const items = [
  {
    albumId: 1,
    id: 1,
    title: "accusamus beatae ad facilis cum similique qui sunt",
    url: "https://via.placeholder.com/600/92c952",
    thumbnailUrl: "https://via.placeholder.com/150/92c952",
  },
]; */
const { Meta } = Card;
const Fotos = () => {
  const state = useSelector((state) => state.postReducer);
  const fotos = prepare(state, 2);
  return (
    <div>
      <Header title={"Фотоальбом"} />
      <Filter />
      {fotos.map((row) => {
        return (
          <Row gutter={16}>
            {row.map((card) => {
              return (
                <Col span={10}>
                  <Card
                    hoverable
                    style={{
                      width: 600,
                    }}
                    cover={
                      <a href={card.url} target="_self">
                        <img alt={card.title} src={card.url} />
                      </a>
                    }
                    key={card.id}
                  >
                    <Meta title={card.title} description={card.url} />
                  </Card>
                </Col>
              );
            })}
          </Row>
        );
      })}
    </div>
  );
};

export default Fotos;
